import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCalendar, LuClock5, LuMapPin } from "react-icons/lu";

function AdminProgramsPage() {
	return (
		<>
			<div>
				<h1 className="text-2xl font-bold mb-2">Programs</h1>

				<Link
					href="/admin/programs/new"
					className="btn btn-primary"
				>
					Add new
				</Link>
			</div>
			<div className="divider">Existing events</div>
			<form
				action="/find-event"
				className="my-5"
			>
				<div className="join">
					<input
						type="search"
						className="input input-bordered join-item rounded-l-md"
						placeholder="Title..."
					/>
					<button className="btn join-item rounded-r-md">
						Search
					</button>
				</div>
			</form>
			{/* Events */}
			<div className="flex flex-col sm:flex-row flex-wrap gap-5">
				<div className="sm:w-[calc(50%-1.25rem)] flex flex-col sm:flex-row gap-3 border p-3 sm:p-5 rounded-2xl">
					<div className="relative h-32 aspect-video sm:aspect-square rounded-xl overflow-hidden">
						<Image
							fill
							src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
							className="object-cover"
						/>
					</div>
					<div className="flex-1">
						<h2 className="text-2xl font-bold">
							Lorem ipsum dolor sit amet.
						</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Atque, dolor?...
						</p>
						<div className="mt-5 text-sm">
							<div>
								<p className="flex items-center gap-2 ">
									<LuCalendar className="inline-block" />{" "}
									12/Oct/2022 - 15/Oct/2022
								</p>
							</div>
							<div>
								<p className="flex items-center gap-2 ">
									<LuClock5 className="inline-block" />{" "}
									12:00pm - 3:00pm
								</p>
							</div>
							<div>
								<p className="flex items-center gap-2 ">
									<LuMapPin className="inline-block" /> 12
									avenue road
								</p>
							</div>
						</div>
						<div className="text-right">
							<Link
								href="/programs/test"
								className="btn btn-sm sm:btn-md btn-primary"
							>
								View Event
							</Link>
						</div>
					</div>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] flex flex-col gap-3 border p-5 rounded-2xl">
					Nice
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] flex flex-col gap-3 border p-5 rounded-2xl">
					Nice
				</div>
			</div>
		</>
	);
}

export default AdminProgramsPage;
