import mongoose, { Schema } from "mongoose";

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

	const UfcRanking = mongoose.models.UfcRanking || mongoose.model("UfcRanking", ufcRankingsSchema);

export default UfcRanking;
