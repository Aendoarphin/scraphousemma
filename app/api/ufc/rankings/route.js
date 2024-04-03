import UfcRanking from "@/lib/mongodb/models/UfcRanking";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";

connectToDatabase();

async function getUfcRankingsData() {
	try {
		const response = await fetch("https://api.octagon-api.com/rankings");
		if (!response.ok) {
			throw new Error("Failed to fetch rankings data");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching rankings data:", error);
		throw error;
	}
}

export const GET = async () => {
	try {
		const data = await getUfcRankingsData();

		// Check if data already exists in the collection
		const existingData = await UfcRanking.find({});
		if (existingData && existingData.length > 0) {
			console.log("Data already exists, no new data was created");
			console.log(typeof existingData)
			return NextResponse.json(existingData, { statusText: 200 });
		}

		// If data doesn't exist, create new documents
		await UfcRanking.create(data);
		console.log("Data created: UfcRanking");
		return NextResponse.json(data, { statusText: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { statusText: 500 });
	}
};
