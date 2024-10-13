import UfcRanking from "@/lib/mongodb/models/UfcRanking";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";

connectToDatabase();

/**
 * Check if the given date is older than a week
 */
function isNewDate(dateStr) {
	const date = new Date(dateStr);
	const now = new Date();
	const prevWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
	return date <= prevWeek;
}

/**
 * Fetch API data and update the database
 */
async function updateDatabaseWithAPIData() {
	try {
		const apiData = await fetchAPI(
			"https://api.octagon-api.com/rankings",
			"get"
		);
		if (apiData && apiData.length > 0) {
			await UfcRanking.deleteMany({});
			await UfcRanking.insertMany(apiData);
			return { message: "Rankings updated", data: apiData };
		} else {
			return { message: "API error, cannot update", data: [] };
		}
	} catch (error) {
		throw new Error(error.message);
	}
}

/**
 * Get all UFC rankings and synchronize with API data if needed
 */
export async function GET() {
	try {
		const dbData = await UfcRanking.find({});
		let responseMessage = "No changes";
		let responseData = dbData;

		if (dbData.length === 0) {
			const apiResponse = await updateDatabaseWithAPIData();
			responseMessage = apiResponse.message;
			responseData = apiResponse.data.length > 0 ? apiResponse.data : dbData;
		} else if (isNewDate(dbData[0].createdAt)) {
			const apiResponse = await updateDatabaseWithAPIData();
			responseMessage = apiResponse.message;
			responseData = apiResponse.data.length > 0 ? apiResponse.data : dbData;
		}

		// Explicitly handle the case where both dbData and responseData are empty
		if (responseData.length === 0) {
			responseMessage = "API and DB data are empty";
		}

		// Set Cache-Control header to no-store to avoid caching 10/13/24
		const response = NextResponse.json(
			{ message: responseMessage, content: responseData },
			{ status: 200 }
		);

		// Disable caching by setting cache control headers; 10/13/24
		response.headers.set("Cache-Control", "no-store");

		return response;
	} catch (error) {
		console.error(error, error.message);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
