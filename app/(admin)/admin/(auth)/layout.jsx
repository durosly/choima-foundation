import Link from "next/link";

function AdminLayout({ children }) {
	return (
		<div className="drawer lg:drawer-open">
			<input
				id="my-drawer-2"
				type="checkbox"
				className="drawer-toggle"
			/>
			<div className="drawer-content flex flex-col ">
				{/* Page content here */}
				<main className="p-5">{children}</main>
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
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
						<button className="btn btn-sm btn-error">logout</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AdminLayout;
