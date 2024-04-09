import mongoose, { Schema } from "mongoose";

const ufcFighterSchema = new Schema({
	category: String,
	draws: Number,
	imgUrl: String,
	losses: Number,
	name: String,
	nickname: String,
	wins: Number,
	status: String,
	placeOfBirth: String,
	trainsAt: String,
	fightingStyle: String,
	age: Number,
	height: Number,
	weight: Number,
	octagonDebut: String,
	reach: Number,
	legReach: Number,
});

const ufcFightersSchema = new Schema({
	id: {
		type: String,
		unique: true,
	},
	fighterInfo: ufcFighterSchema,
});

const UfcFighter =
	mongoose.models.UfcFighter || mongoose.model("UfcFighter", ufcFightersSchema);

export default UfcFighter;
