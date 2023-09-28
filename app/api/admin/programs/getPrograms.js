import connectMongo from "@/lib/connectDB";
import ProgramModel from "@/models/program";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function getPrograms(request) {
	try {
		const { searchParams } = new URL(request.url);
		const page = searchParams.get("page");

		await connectMongo();

		const programs = await ProgramModel.find({});
		// .sort("-created_at")
		// .limit(5)
		// .offset((page - 1) * 5);

		return NextResponse.json({
			status: true,
			message: "success",
			programs,
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ status: false, message: error.message }),
			{
				status: 500,
				headers: { "Content-Type": `application/json` },
			}
		);
	}
}

export default getPrograms;
