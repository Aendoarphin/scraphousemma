import axios from 'axios';
import { load } from 'cheerio';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const urlType = request.nextUrl.searchParams.get('type') || 'ufc';
    const url = `https://www.sherdog.com/organizations/Ultimate-Fighting-Championship-UFC-2`;
    
    const scrapeData = async () => {
      try {
        const response = await axios.get(url);
        const $ = load(response.data);
        const events = [];

        const $date = $('[itemtype="http://schema.org/Event"]').each((i, element) => {
					const eventData = $(element).text();
					const splitArr = eventData.split(/\n{1,}\t{1,}/);
					const month = splitArr[4].substring(0, 3);
					const day = splitArr[4].substring(3,5);
					const year = splitArr[4].substring(5,10);
					const name = splitArr[9];
					let location = splitArr[11].trim();
          const refDate = new Date(`${year}-${month}-${day}`);
          const eventStatus = refDate > Date.now() ? "upcoming" : "past";
					if (location === "") {location = splitArr[12].trim();}
					events.push({ month, day, year, name, location, eventStatus });
				});

        const data = { events: events };
        return data;
      } catch (error) {
        console.error("Error fetching the page:", error);
        throw error;
      }
    };

    const data = await scrapeData();

    return NextResponse.json(
      { message: "Success", content: data },
      { status: 200 }
    );
  } catch (error) {
    console.error(error, error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
