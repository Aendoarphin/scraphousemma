import UfcFighter from "@/lib/mongodb/models/UfcFighter";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";
import countries from "country-codes-list";
import { isNewDate } from "@/scripts/util";

connectToDatabase();

const countryCodes = countries.customList("countryNameEn", "{countryCode}");

/**
 * Extracts the country of the fighter's birthplace.
 *
 * @param {string} location - Fighter's place of birth.
 * @returns {string} - Fighter's country name.
 */
function getCountryName(location = "") {
    let countryName = "";
    const target = location.lastIndexOf(", ");

    if (target > -1) {
        countryName = location.substring(target + 2);
    } else {
        countryName = location || "";
    }

    switch (countryName) {
        case "United States":
            countryName += " of America";
            break;
        case "England":
        case "Scotland":
        case "Wales":
        case "Northern Ireland":
            countryName = "United Kingdom";
            break;
        case "Czechia":
            countryName = "Czech Republic";
            break;
        default:
            break;
    }

    return countryName;
}

/**
 * Reformats external API object.
 *
 * @param {Array<string>} keysArr - Array of fighter IDs.
 * @param {object} apiDataObj - Object containing fighter data.
 * @returns {Array<object>} - Array of reformatted fighter objects.
 */
function reformatObj(keysArr, apiDataObj) {
    let transformedData = {};
    keysArr.forEach((keyName) => {
        let fighterDetails = {};
        fighterDetails.id = keyName;
        fighterDetails.details = apiDataObj[keyName];

        // Get country code based on place of birth
        const countryName = getCountryName(fighterDetails.details.placeOfBirth);
        fighterDetails.details.flag = countryCodes[countryName] || "";

        transformedData[keyName] = fighterDetails;
    });
    return Object.values(transformedData);
}

/**
 * Internal endpoint for receiving all UFC fighters.
 */
export async function GET() {
    try {
        const dbData = await UfcFighter.find({});
        let responseMessage = "";

        if (dbData.length > 0 && isNewDate(dbData[0].createdAt)) {
            const apiData = await fetchAPI("https://api.octagon-api.com/fighters", "get");
            const fighterIds = Object.keys(apiData);
            const newData = reformatObj(fighterIds, apiData);

            await UfcFighter.deleteMany({});
            await UfcFighter.insertMany(newData);
            responseMessage = "Fighters updated";
        } else if (dbData.length === 0) {
            const apiData = await fetchAPI("https://api.octagon-api.com/fighters", "get");
            if (apiData && Object.keys(apiData).length > 0) {
                const fighterIds = Object.keys(apiData);
                const newData = reformatObj(fighterIds, apiData);
                await UfcFighter.insertMany(newData);
                responseMessage = "Fighters added";
            } else {
                responseMessage = "No data available from API";
            }
        } else {
            responseMessage = "No changes";
        }

        return NextResponse.json(
            { message: responseMessage, content: await UfcFighter.find({}) },
            { statusText: 200 }
        );
    } catch (error) {
        console.error(error, error.message);
        return NextResponse.json(
            { message: error.message },
            { statusText: 500 }
        );
    }
}
