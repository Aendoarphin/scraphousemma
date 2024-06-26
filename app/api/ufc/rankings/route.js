import UfcRanking from "@/lib/mongodb/models/UfcRanking";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";

connectToDatabase();

/**
 * Check if external api was updated.
 */
function isEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (
			!arr1[i].fighters.every(
				(fighter, index) => fighter.name === arr2[i].fighters[index].name
			)
		) {
			return false;
		}
	}
	return true;
}

/**
 * Internal endpoint for receiving all UFC fighters.
 *
 * Endpoint: `/api/ufc/rankings`
 * @returns {Promise<{ message: string, content: Array<Object> | Object }>}
 */
export async function GET() {
	try {
		let responseMessage = "";
		const dbData = await UfcRanking.find({}); // Array
		const apiData = await fetchAPI("https://api.octagon-api.com/rankings"); // Array

		if (!isEqual(dbData, apiData) && apiData.length > 0) {
			await UfcRanking.deleteMany({});
			await UfcRanking.insertMany(apiData);
			responseMessage = "Collection updated with API data";
		} else {
			responseMessage = "Data is up-to-date";
		}

		return NextResponse.json(
			{ message: responseMessage, content: await UfcRanking.find({}) },
			{ statusText: 200 }
		);
	} catch (error) {
		console.error("An error occurred:", error.message);
		return NextResponse.json(
			{ message: "An error occurred: " + error.message },
			{ statusText: 500 }
		);
	}
}