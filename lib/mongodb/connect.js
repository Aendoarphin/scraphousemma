import mongoose from "mongoose";

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Mongoose connected to the database");
	} catch (error) {
		console.error(`Mongoose connection error: ${error}`);
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose disconnected from the database");
});

export default connectToDatabase;
