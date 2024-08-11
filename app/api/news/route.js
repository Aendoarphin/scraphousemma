import { NextResponse } from "next/server";
import { fetchAPI } from "@/scripts/util";

export async function GET() {
	try {
		const options = {
			endpoint: "everything",
			q: "ufc%20OR%20pfl%20OR%20%22ONE%20Championship%22",
			pageSize: "50",
			language: "en",
			searchIn: "description",
			sortBy: "relevancy",
		};

		const response = await fetchAPI(
			`https://newsapi.org/v2/${options.endpoint}?q=${options.q}&pageSize=${options.pageSize}&language=${options.language}&sortBy=${options.sortBy}&apiKey=${process.env.NEWS_API_KEY}`, "get"
		);

		return NextResponse.json(response);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}
