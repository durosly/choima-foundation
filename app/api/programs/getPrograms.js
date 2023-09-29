import connectMongo from "@/lib/connectDB";
import ProgramModel from "@/models/program";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function getPrograms(request) {
	try {
		const { searchParams } = new URL(request.url);
		const page = searchParams.get("page");
		const q = searchParams.get("q");

		await connectMongo();

		const query = {};

		query.status = "publish";

		if (!!q) {
			query.$text = { $search: `\"${q}\"` };
		}

		const data = await ProgramModel.paginate(query, { page });

		return NextResponse.json({
			status: true,
			message: "success",
			data,
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ status: false, message: error }), {
			status: 500,
			headers: { "Content-Type": `application/json` },
		});
	}
}

export default getPrograms;
