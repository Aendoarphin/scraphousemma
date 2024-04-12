import UfcFighter from "@/lib/mongodb/models/UfcFighter";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";

connectToDatabase();

export async function GET() {
	try {
		const apiData = await fetchAPI("https://api.octagon-api.com/fighters");
		const dbData = await UfcFighter.find({});
		let responseMessage = "";

		const dbFighterIds = Object.keys(dbData);

		const fighterIds = Object.keys(apiData); // ["one", "two", ...]

		// Assigns key names of apiData to new 'id' property of each apiData value
		fighterIds.forEach((keyName) => {
			apiData[keyName].fighterId = keyName;
		});
		console.log(Object.values(apiData))
		// await UfcFighter.insertMany(Object.values(apiData))

		return NextResponse.json({ content: apiData }, { statusText: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured: " + error.message },
			{ statusText: 500 }
		);
	}
}
