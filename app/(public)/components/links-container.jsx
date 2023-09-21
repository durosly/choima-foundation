import Link from "next/link";

function LinksWrapper() {
	return (
		<>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/">Programs</Link>
			</li>
			<li>
				<Link href="/about-us">About Us</Link>
			</li>
			<li>
				<Link href="/">Contact</Link>
			</li>
			<li>
				<Link href="/">Sponsorship</Link>
			</li>
		</>
	);
}

export default LinksWrapper;
