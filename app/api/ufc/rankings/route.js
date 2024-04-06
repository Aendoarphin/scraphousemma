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
        let responseMessage = "";
        const dbData = await UfcRanking.find({}); // Array
        const apiData = await getUfcRankingsData(); // Array

        // Check if the collection exists in the database
        if (dbData.length === 0) {
            // If collection is empty, insert data from API
            await UfcRanking.insertMany(apiData);
            responseMessage = "Collection created and populated with API data";
        } else {
            // If collection is not empty, compare API data with database data
            let rankingsAreDifferent = false;
            for (let i = 0; i < dbData.length; i++) {
                for (let j = 0; j < dbData[i].fighters.length; j++) {
                    if (dbData[i].fighters[j].name !== apiData[i].fighters[j].name) {
                        rankingsAreDifferent = true;
                        break;
                    }
                }
                if (rankingsAreDifferent) {
                    // If differences found, update the entire collection
                    await UfcRanking.deleteMany({});
                    await UfcRanking.insertMany(apiData);
                    responseMessage = "Collection updated with new data";
                    break;
                }
            }
            if (!rankingsAreDifferent) {
                responseMessage = "No changes made, existing data returned";
            }
        }

        return NextResponse.json({ message: responseMessage, content: await UfcRanking.find({}) }, { statusText: 200 });

    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred: " + error.message },
            { statusText: 500 }
        );
    }
};
