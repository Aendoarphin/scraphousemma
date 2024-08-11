const axios = require("axios");

async function fetchAPI(url, requestType, headers = {}, params = {}, timeout = 30000) {
	try {
		const requestConfig = {
			headers,
			params,
			timeout
		};

		const requestTypes = {
			get: () => axios.get(url, requestConfig),
			post: () => axios.post(url, {}, requestConfig),
			put: () => axios.put(url, {}, requestConfig),
			delete: () => axios.delete(url, requestConfig),
		};
		
		if (!requestTypes[requestType]) {
			throw new Error("Invalid request type");
		}

		const response = await requestTypes[requestType]();

		if (response.status !== 200) {
			throw new Error(`Failed to fetch: ${url}`);
		}

		return response.data;
	} catch (error) {
		console.error("Error fetching: ", error);
		throw error;
	}
}

/**
 * Checks if a given date is older than one week.
 *
 * @param {string} dateStr - The date string to check.
 * @returns {boolean} - True if the date is older than one week, false otherwise.
 */
function isNewDate(dateStr) {
	const date = new Date(dateStr);
	const now = new Date();
	const prevWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
	return date <= prevWeek;
}

module.exports = { fetchAPI, isNewDate };
