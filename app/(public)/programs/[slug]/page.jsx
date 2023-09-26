import Image from "next/image";
import { LuCalendar, LuClock5, LuMapPin } from "react-icons/lu";
import TimelineDisplay from "./components/timeline";

function ProgramsDetailsPage() {
	return (
		<>
			<div className="px-5 sm:px-10">
				<div className="relative h-44 w-full rounded-xl overflow-hidden">
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
						elit. Atque, dolor?. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Laborum maxime, dolorum
						veritatis aut asperiores perspiciatis magni quis non
						itaque recusandae.
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
								<LuClock5 className="inline-block" /> 12:00pm -
								3:00pm
							</p>
						</div>
						<div>
							<p className="flex items-center gap-2 ">
								<LuMapPin className="inline-block" /> 12 avenue
								road
							</p>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-2xl font-bold text-center mb-3">
						Activities
					</h3>
					<TimelineDisplay />
				</div>
			</div>
		</>
	);
}

export default ProgramsDetailsPage;
