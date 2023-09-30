import Image from "next/image";
import Link from "next/link";
import { LuCalendar, LuClock5, LuGrip, LuMapPin } from "react-icons/lu";
import ExistingPrograms from "./components/existing-programs";
import CoverImage from "../components/cover";

function ProgramsPage() {
	return (
		<>
			<CoverImage title="Programs/Events" />
			<div className="px-5 sm:px-10">
				<ExistingPrograms />
			</div>
		</>
	);
}

export default ProgramsPage;
