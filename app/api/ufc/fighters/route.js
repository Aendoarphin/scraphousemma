import UfcFighter from "@/lib/mongodb/models/UfcFighter";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";

connectToDatabase()

export async function GET() {
	try {
    const apiData = await fetchAPI("https://api.octagon-api.com/fighters");
    const dbData = await UfcFighter.find({});
    let responseMessage = ""
    const fighterIds = Object.keys(apiData)
    const dbFighterIds = Object.keys(dbData)

    // Check if both arrs have same length and same value
    if (fighterIds.length === dbFighterIds.length && fighterIds.every((value, index) => value === dbData[index])) {

    }

    return NextResponse.json({message: responseMessage, content: apiData});
  } catch (error) {
    return NextResponse.json({message: error.message});
  }
}
