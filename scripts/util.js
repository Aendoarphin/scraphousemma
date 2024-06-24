const axios = require("axios");

async function fetchAPI(url) {
	try {
		const response = await axios.get(url);
		if (!response.status === 200) {
			throw new Error("Failed to fetch: ", url);
		}
		return response.data;
	} catch (error) {
		console.error("Error fetching: ", error);
		throw error;
	}
}

module.exports = { fetchAPI };
