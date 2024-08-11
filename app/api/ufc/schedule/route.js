import { NextResponse } from "next/server";
import { fetchAPI } from "@/scripts/util";
import UfcSchedule from "@/lib/mongodb/models/UfcSchedule";
import connectToDatabase from "@/lib/mongodb/connect";
import { isNewDate } from "@/scripts/util";

connectToDatabase();

export async function GET() {
	try {
		const headers = { Accept: "application/json" };

		const competitionsIdList = async () => {
			const response = await fetchAPI(
				`https://api.sportradar.com/mma/trial/v2/en/seasons.json?api_key=${process.env.SPORT_RADAR_API_KEY}`,
				"get",
				headers
			);
			return response.seasons.map((competitionItem) => competitionItem);
		};

		const eventData = await competitionsIdList();
		let responseMessage = "No changes";

		const eventList = [];
		const sortedEvents = eventData.sort((a, b) => {
			const dateA = new Date(a.start_date);
			const dateB = new Date(b.start_date);
			return dateA - dateB;
		});

		sortedEvents.forEach((event) => {
			eventList.push({
				eventId: event.id,
				eventName: event.name,
				eventDate: event.start_date,
				eventYear: event.year,
			});
		});

		const dbData = await UfcSchedule.find({});

		if (dbData.length === 0) {
			await UfcSchedule.insertMany(eventList);
			responseMessage = "Schedules added";
		} else if (dbData.length > 0 && isNewDate(dbData[0].createdAt)) {
			await UfcSchedule.deleteMany({});
			await UfcSchedule.insertMany(eventList);
			responseMessage = "Schedules updated";
		}

		return NextResponse.json(
			{ message: responseMessage, content: await UfcSchedule.find({}) },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
