import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuClock5, LuGrip, LuMapPin } from "react-icons/lu";

function ProgramsPage() {
	return (
		<>
			<div
				className="px-10 h-52 relative bg-center bg-fixed"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3459921/pexels-photo-3459921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
				}}
			>
				<div className="inline-block text-right absolute bottom-4 left-10">
					<h1 className="text-4xl sm:text-6xl text-left text-white">
						Programs/Events
					</h1>
				</div>
				<LuGrip className="stroke-white w-14 h-14 inline-block absolute bottom-4 right-4" />
			</div>

			{/* Events */}
			<div className="px-5 sm:px-10">
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
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Atque, dolor?...
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
			</div>
		</>
	);
}

export default ProgramsPage;
