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

		// const dbFighterIds = Object.keys(dbData);

		const fighterIds = Object.keys(apiData);

		let transformedData = {};

		// Assigns key names of external obj to new 'id' property of each apiData value
		fighterIds.forEach((keyName) => {
			let fighterDetails = {};
			fighterDetails.id = keyName;
			fighterDetails.details = apiData[keyName];
			transformedData[keyName] = fighterDetails;
		});

		console.log(transformedData);

		await UfcFighter.insertMany(Object.values(transformedData))

		return NextResponse.json(
			{ content: await UfcFighter.find({id: "alexander-volkanovski"}) },
			{ statusText: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occured: " + error.message },
			{ statusText: 500 }
		);
	}
}
