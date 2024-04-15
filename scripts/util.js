import axios from "axios";
import { countryNames } from "@/constants";
import countries from "country-codes-list"

export function decodeUrl(urlEncodedString) {
  return decodeURIComponent(urlEncodedString.replace(/%([0-9A-Fa-f]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16))));
}

export async function fetchAPI(url) {
  try {
		const response = await axios.get(url);
		if (!response.status === 200) {
			throw new Error("Failed to fetch: ", url);
		}
		return response.data;
	} catch (error) {
		console.error("Error fetching rankings: ", error);
		throw error;
	}
}

export function getCountryName(location) {
	const commaIndex = location.indexOf(', ');
	if (commaIndex > -1) {
			console.log(location.substring(commaIndex + 2))
			return location.substring(commaIndex + 2);
	} else {
			console.log(location)
			return location;
	}
}

