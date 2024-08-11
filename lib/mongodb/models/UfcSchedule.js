import mongoose, { Schema } from "mongoose";

const ufcScheduleSchema = new Schema(
		{
			eventId: String,
			eventName: String,
			eventDate: String,
			eventYear: String,
		},
		{
			timestamps: true,
		}
	);

	const UfcSchedule = mongoose.models.UfcSchedule || mongoose.model("UfcSchedule", ufcScheduleSchema);

export default UfcSchedule;