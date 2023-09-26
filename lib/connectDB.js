import mongoose from "mongoose";

// const connectMongo = async () => mongoose.connect(process.env.MONGODB_URL, {});

if (!process.env.MONGODB_URL) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const url = process.env.MONGODB_URL;
const options = {};

// let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		// client = new MongoClient(uri, options);
		global._mongoClientPromise = mongoose.connect(url, options);
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	//   client = new MongoClient(uri, options);
	clientPromise = mongoose.connect(url, options);
}

export default clientPromise;
