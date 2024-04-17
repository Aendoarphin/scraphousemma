const axios = require("axios");

function decodeUrl(urlEncodedString) {
  return decodeURIComponent(
    urlEncodedString.replace(/%([0-9A-Fa-f]{2})/g, (match, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

/**
 *
 * @param {string} url - An API endpoint
 * @returns {AxiosResponse<any, any>} The response
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
/**
 * @param {string} location Fighter's place of birth
 * @returns {string} Fighter's country name
 */
function getCountryName(location = "") {
  let countryName = "";
  const target = location.lastIndexOf(", ");

  if (target > -1) {
    // target has comma
    countryName = location.substring(target + 2);
  } else {
    // no comma
    if (location === undefined || location === null || location === "") {
      countryName = "";
    } else {
      countryName = location;
    }
  }

  switch (countryName) {
    case "United States":
      countryName += " of America";
      break;
    case "England":
      countryName = "United Kingdom";
      break;
    default:
      break;
  }

  return countryName;
}

module.exports = { fetchAPI, getCountryName, decodeUrl };
