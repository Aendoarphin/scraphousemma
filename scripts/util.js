const axios = require("axios");

/**
 * Utility function for making a GET request to the given endpoint.
 *
 * @param {string} url - The URL of the API endpoint to fetch.
 * @returns {Promise<AxiosResponse<any, any>>} A promise resolving to the response data.
 */
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
