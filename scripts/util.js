const axios = require("axios");

/**
 * Decodes a URL-encoded string.
 * This function takes a URL-encoded string and decodes it, converting any percent-encoded characters to their original form.
 *
 * @param {String} urlEncodedString The URL-encoded string to decode.
 * @returns {String} The decoded string.
 */
function decodeUrl(urlEncodedString) {
	return decodeURIComponent(
		urlEncodedString.replace(/%([0-9A-Fa-f]{2})/g, (match, p1) =>
			String.fromCharCode(parseInt(p1, 16))
		)
	);
}

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

module.exports = { fetchAPI, decodeUrl };
