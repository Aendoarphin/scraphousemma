import mongoose, { Schema } from "mongoose";

const ufcFighterSchema = new Schema(
	{
		category: String,
		draws: String,
		imgUrl: String,
		losses: String,
		name: String,
		nickname: String,
		wins: String,
		status: String,
		placeOfBirth: String,
		trainsAt: String,
    fightingStyle: String,
		age: String,
		height: String,
		weight: String,
		octagonDebut: String,
		reach: String,
		legReach: String,
	},
	{
		timestamps: true,
	}
);

const UfcFighter =
	mongoose.models.UfcFighter ||
	mongoose.model("UfcFighter", ufcFighterSchema);

export default UfcFighter;
