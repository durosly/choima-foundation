import ToastWrapper from "./components/toastWrapper";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | Chioma Foundation ",
		default: "Helping to make the world a better place", // a default is required when creating a template
	},
	description:
		"At Chioma Onwenonye foundation, we believe in making a positive impact, one step at a time. Our foundation is built on the pillars of compassion, empowerment, and change. With a heartfelt commitment to bettering the world around us, we are dedicated to creating a brighter future for all",
	keywords: ["children", "Poor", "Charity", "Helping"],
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
	themeColor: "#284FFB",
	openGraph: {
		images: "/images/cover.png",
		title: "Chioma Foundation",
		description:
			"At Chioma Onwenonye foundation, we believe in making a positive impact, one step at a time. Our foundation is built on the pillars of compassion, empowerment, and change. With a heartfelt commitment to bettering the world around us, we are dedicated to creating a brighter future for all",
		url: process.env.NEXT_PUBLIC_URL,
		siteName: "Chioma Onwenonye foundation",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Chioma Foundation",
		description:
			"At Chioma Onwenonye foundation, we believe in making a positive impact, one step at a time. Our foundation is built on the pillars of compassion, empowerment, and change. With a heartfelt commitment to bettering the world around us, we are dedicated to creating a brighter future for all",

		images: ["/images/cover.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ToastWrapper />
			</body>
		</html>
	);
}
