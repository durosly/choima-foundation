import NavBar from "@/app/(public)/components/nav";
import Image from "next/image";
import LinksWrapper from "./components/links-container";
import Footer from "@/app/(public)/components/footer";
import logo from "@/public/images/logo.png";
import { NavigationEvents } from "./components/navigation-event";

export default function PublicLayout({ children }) {
	return (
		<div className="drawer">
			<NavigationEvents />
			<input
				id="my-drawer-3"
				type="checkbox"
				className="drawer-toggle"
			/>
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<NavBar />

				{/* Page content here */}
				<main className="space-y-20">{children}</main>
				<Footer />
			</div>
			<div className="drawer-side z-50">
				<label
					htmlFor="my-drawer-3"
					className="drawer-overlay"
				></label>
				<div className="p-4 w-80 min-h-full bg-base-200">
					<div className="flex items-center px-2 mx-2 gap-2">
						<div className="relative h-10 aspect-square">
							<Image
								src={logo}
								alt="Chioma Onwenonye foundation"
								placeholder="blur"
								fill
								priority
							/>
						</div>
						<div className="flex flex-col text-xs">
							<span className="font-bold">Chioma Onwenonye</span>
							<span>Foundation</span>
						</div>
					</div>
					<ul className="menu ">
						{/* Sidebar content here */}
						<LinksWrapper />
					</ul>
				</div>
			</div>
		</div>
	);
}
