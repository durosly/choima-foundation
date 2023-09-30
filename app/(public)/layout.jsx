import NavBar from "@/app/(public)/components/nav";
import Image from "next/image";
import LinksWrapper from "./components/links-container";
import Footer from "@/app/(public)/components/footer";
import logo from "@/public/images/logo.png";
import { NavigationEvents } from "./components/navigation-event";

export const metadata = {
	title: {
		template: "%s | Chioma Foundation ",
		default: "Helping to make the world a better place", // a default is required when creating a template
	},
	description:
		"At Chioma Onwenonye foundation, we believe in making a positive impact, one step at a time. Our foundation is built on the pillars of compassion, empowerment, and change. With a heartfelt commitment to bettering the world around us, we are dedicated to creating a brighter future for all",
	keywords: ["children", "Poor", "Charity", "Helping"],
	metadataBase: new URL("https://acme.com"),
	themeColor: "#284FFB",
};

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
