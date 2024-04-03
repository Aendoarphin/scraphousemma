import mongoose, { Schema } from "mongoose";

let UfcRanking;

if (mongoose.models.UfcRanking) {
	UfcRanking = mongoose.model("UfcRanking");
} else {
	const ufcRankingsSchema = new Schema(
		{
			id: String,
			categoryName: String,
			champion: {
				id: String,
				championName: String,
			},
			fighters: [
				{
					id: String,
					name: String,
				},
			],
		},
		{
			timestamps: true,
		}
	);

	UfcRanking = mongoose.model("UfcRanking", ufcRankingsSchema);
}

export default UfcRanking;
