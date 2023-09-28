import ProgramModel from "@/models/program";

const { NextResponse } = require("next/server");

async function updateCover(request, { params: { id } }) {
	try {
		const { image } = await request.json();

		if (!id || !image) {
			throw new Error("Empty parameters");
		}

		await ProgramModel.findByIdAndUpdate(id, { cover_image: image });

		return NextResponse.json({ status: true, message: "success" });
	} catch (error) {
		return new Response(
			JSON.stringify({
				status: false,
				message: error.message,
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}

export default updateCover;
