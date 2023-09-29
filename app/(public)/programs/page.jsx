import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuClock5, LuGrip, LuMapPin } from "react-icons/lu";
import ExistingPrograms from "./components/existing-programs";

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
					<h1 className="text-2xl sm:text-6xl text-left text-white">
						Programs/Events
					</h1>
				</div>
				<LuGrip className="stroke-white sm:w-14 sm:h-14 inline-block absolute bottom-4 right-4" />
			</div>
			<div className="px-5 sm:px-10">
				<ExistingPrograms />
			</div>
		</>
	);
}

export default ProgramsPage;
