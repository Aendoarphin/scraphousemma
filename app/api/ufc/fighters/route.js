import UfcFighter from "@/lib/mongodb/models/UfcFighter";
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb/connect";
import { fetchAPI } from "@/scripts/util";
import countries from "country-codes-list";
import { getCountryName } from "@/scripts/util";

connectToDatabase();

const countryCodes = countries.customList("countryNameEn", "{countryCode}");

function areEqual(prevWins, newWins) {
  if (prevWins.length !== newWins.length) {
    return false;
  }
  return prevWins.every((element, index) => element === newWins[index]);
}

// Assign fetched keys to new 'id' field
// Assign fetched values to new 'details' key
function reformat(keysArr, apiDataObj) {
  let transformedData = {};
  keysArr.forEach((keyName) => {
    let fighterDetails = {};
    fighterDetails.id = keyName;
    fighterDetails.details = apiDataObj[keyName];
    fighterDetails.details.flag =
      countryCodes[getCountryName(fighterDetails.details.placeOfBirth)];
    transformedData[keyName] = fighterDetails;
  });
  return Object.values(transformedData);
}

export async function GET() {
  try {
    const apiData = await fetchAPI("https://api.octagon-api.com/fighters");
    let responseMessage = "";

    const fighterIds = Object.keys(apiData);

    const newData = reformat(fighterIds, apiData);
    const oldData = await UfcFighter.find({});

    const prevFighterData = oldData.map((obj) => obj.details.wins);
    const nextFighterData = newData.map((obj) => obj.details.wins);

    if (!areEqual(prevFighterData, nextFighterData)) {
      await UfcFighter.deleteMany({});
      await UfcFighter.insertMany(newData);
      responseMessage = "Collection updated: " + UfcFighter.modelName;
    } else {
      responseMessage = "Data is up-to-date: " + UfcFighter.modelName;
    }

    return NextResponse.json(
      { message: responseMessage, content: await UfcFighter.find({}) },
      { statusText: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured: " + error.message },
      { statusText: 500 }
    );
  }
}
