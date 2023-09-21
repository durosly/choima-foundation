import { LuGrip, LuMail, LuMapPin, LuPhoneCall } from "react-icons/lu";

function ContactUsPage() {
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
						Contact Us
					</h1>
				</div>
				<LuGrip className="stroke-white w-14 h-14 inline-block absolute bottom-4 right-4" />
			</div>

			<div className="px-10">
				<div>
					<h2 className="text-4xl font-bold">
						We can&apos;t wait to here from you
					</h2>
					<p>
						Give us a call or drop by anytime, we answer all
						enquiries within 24 hours.
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-20 sm:gap-10 mt-10">
					<form
						action="/nice"
						className="flex-1"
					>
						<div className="flex flex-col sm:flex-row sm:gap-10">
							<div className="form-control flex-1">
								<label
									className="label justify-start"
									htmlFor="name"
								>
									Your Name{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control flex-1">
								<label
									className="label justify-start"
									htmlFor="email"
								>
									Your Email{" "}
									<span className="text-red-600">*</span>
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="input input-bordered"
								/>
							</div>
						</div>
						<div className="form-control">
							<label
								className="label justify-start"
								htmlFor="address"
							>
								Address
							</label>
							<input
								type="text"
								name="address"
								id="address"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label
								htmlFor="message"
								className="label justify-start"
							>
								Message <span className="text-red-600">*</span>
							</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="5"
								className="textarea textarea-bordered"
							></textarea>
						</div>
						<div className="form-control mt-5">
							<button className="btn btn-primary btn-block">
								Send message
							</button>
						</div>
					</form>
					<div className="flex-1 space-y-5">
						<div className="flex gap-4 sm:gap-10">
							<LuMapPin className="stroke-primary w-10 md:w-20 h-10 md:h-20" />
							<div>
								<h3 className="font-bold mb-2">Address</h3>
								<p className="capitalize text-sm">
									No. 20 Digbori Street, <br />
									Essi Layout, Warri, <br />
									Nigeria
								</p>
							</div>
						</div>
						<div className="flex gap-4 sm:gap-10">
							<LuMail className="stroke-primary w-10 md:w-20 h-10 md:h-20" />
							<div>
								<h3 className="font-bold mb-2">Email Us</h3>
								<p className="capitalize text-sm">
									support@nice.com
								</p>
							</div>
						</div>
						<div className="flex gap-4 sm:gap-10">
							<LuPhoneCall className="stroke-primary w-10 md:w-20 h-10 md:h-20" />
							<div>
								<h3 className="font-bold mb-2">Call Now</h3>
								<p className="capitalize text-sm">
									+234701234567
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactUsPage;
