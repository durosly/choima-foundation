import Link from "next/link";
import { LuPanelLeftOpen } from "react-icons/lu";
import LogoutButton from "./components/logout-btn";

function AdminLayout({ children }) {
	return (
		<div className="drawer max-sm:block  lg:drawer-open">
			<input
				id="my-drawer-2"
				type="checkbox"
				className="drawer-toggle"
			/>
			<div className="drawer-content flex flex-col ">
				{/* Page content here */}
				<div>
					<label
						htmlFor="my-drawer-2"
						className="btn btn-neutral drawer-button lg:hidden"
					>
						<LuPanelLeftOpen />
					</label>
				</div>
				<main className="p-5">{children}</main>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-2"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<li>
						<Link href="/admin/dashboard">Dashbaord</Link>
					</li>
					<li>
						<Link href="/admin/programs">Programs</Link>
					</li>
					<li>
						<Link href="/admin/messages">Messages</Link>
					</li>
					<li>
						<Link href="/admin/mailer">Mailer</Link>
					</li>
					<li>
						<LogoutButton />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AdminLayout;
