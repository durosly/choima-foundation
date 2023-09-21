import { LuGrip } from "react-icons/lu";

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
		</>
	);
}

export default ProgramsPage;
