import UfcFighter from "@/lib/mongodb/models/UfcFighter";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";
import countries from "country-codes-list";

connectToDatabase();

const countryCodes = countries.customList("countryNameEn", "{countryCode}");

/**
 * Compares equality of fighter records between two sets of data.
 *
 * @param {Array<Object>} prevRecord Old records of each fighter.
 * @param {Array<Object>} newRecord New records of each fighter.
 * @returns {boolean} True if the record values stay the same, false otherwise.
 */
export function areEqual(prevRecord, newRecord) {
	if (prevRecord.length !== newRecord.length) {
		return false;
	}
	for (let i = 0; i < prevRecord.length; i++) {
		if (
			prevRecord[i].details.wins !== newRecord[i].details.wins ||
			prevRecord[i].details.losses !== newRecord[i].details.losses
		) {
			return false;
		}
	}
	return true;
}

/**
 * Extracts the country of the fighter's birth place
 *
 * @param {String} location Fighter's place of birth
 * @returns {String} Fighter's country name
 */
function getCountryName(location = "") {
	let countryName = "";
	const target = location.lastIndexOf(", ");

	if (target > -1) {
		countryName = location.substring(target + 2);
	} else {
		if (location === undefined || location === null || location === "") {
			countryName = "";
		} else {
			countryName = location;
		}
	}

	switch (countryName) {
		case "United States":
			countryName += " of America";
			break;
		case "England":
			countryName = "United Kingdom";
			break;
		default:
			break;
	}

	return countryName;
}

/**
 * Reformats external API obj
 *
 * @param {Array<String>} keysArr
 * @param {object} apiDataObj
 * @returns An object array representing a fighter
 */
function reformatObj(keysArr, apiDataObj) {
	let transformedData = {};
	keysArr.forEach((keyName) => {
		let fighterDetails = {};
		fighterDetails.id = keyName;
		fighterDetails.details = apiDataObj[keyName];
		fighterDetails.details.flag =
			countryCodes[getCountryName(fighterDetails.details.placeOfBirth)];
		transformedData[keyName] = fighterDetails;
	});
	return Object.values(transformedData);
}

/**
 * Internal endpoint for receiving all UFC fighters
 *
 * Endpoint: `/api/ufc/fighters`
 * @returns {Promise<{ message: string, content: Array<Object> | Object }>} A promise resolving to an object containing a message and content
 */
export async function GET() {
	try {
		const apiData = await fetchAPI("https://api.octagon-api.com/fighters");
		let responseMessage = "";

		const fighterIds = Object.keys(apiData);

		const newData = reformatObj(fighterIds, apiData);
		const oldData = await UfcFighter.find({});

		const prevFighterData = oldData.map((obj) => obj);
		const newFighterData = newData.map((obj) => obj);

		if (!areEqual(prevFighterData, newFighterData)) {
			await UfcFighter.deleteMany({});
			await UfcFighter.insertMany(newData);
			responseMessage = "Collection updated: " + UfcFighter.modelName;
		} else {
			responseMessage = "Data is up-to-date: " + UfcFighter.modelName;
		}

		return NextResponse.json(
			{ message: responseMessage, content: await UfcFighter.find({}) },
			{ statusText: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured: " + error.stack },
			{ statusText: 500 }
		);
	}
}
