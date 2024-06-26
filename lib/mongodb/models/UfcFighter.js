import mongoose, { Schema } from "mongoose";

const ufcFighterSchema = new Schema(
	{
		id: { type: String, required: true },
		details: {
			category: String,
			draws: String,
			imgUrl: String,
			losses: String,
			name: { type: String, required: true },
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
			flag: String,
		},
	},
	{
		timestamps: true,
	}
);

const UfcFighter =
	mongoose.models.UfcFighter || mongoose.model("UfcFighter", ufcFighterSchema);

export default UfcFighter;
