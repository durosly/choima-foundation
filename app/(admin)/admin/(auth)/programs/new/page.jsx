import React from "react";

function AdminNewProgramPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-2">Add new Program</h1>
			<form action="">
				<div className="form-control">
					<label
						htmlFor="title"
						className="label"
					>
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="desc"
						className="label"
					>
						Description
					</label>
					<input
						type="text"
						name="desc"
						id="desc"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="start-date"
						className="label"
					>
						Start Date
					</label>
					<input
						className="input input-bordered"
						type="date"
						name="start_date"
						id="start-date"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="end-date"
						className="label"
					>
						End Date
					</label>
					<input
						className="input input-bordered"
						type="date"
						name="end_date"
						id="end-date"
					/>
					<label
						htmlFor="end-date"
						className="label-text-alt"
					>
						Leave empty for single day activities
					</label>
				</div>
				<div className="form-control">
					<label
						htmlFor="start-time"
						className="label"
					>
						Start Time
					</label>
					<input
						className="input input-bordered"
						type="time"
						name="start_time"
						id="start-time"
					/>
				</div>
				<div className="form-control">
					<label
						htmlFor="end-time"
						className="label"
					>
						End Time
					</label>
					<input
						className="input input-bordered"
						type="time"
						name="end_time"
						id="end-time"
					/>
				</div>
			</form>
		</div>
	);
}

export default AdminNewProgramPage;
