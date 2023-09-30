import { LuGrip, LuMail, LuMapPin, LuPhoneCall } from "react-icons/lu";
import ContactForm from "./components/contact-form";

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
					<ContactForm />
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
								<h3 className="font-bold mb-2">Phonenumbers</h3>
								<div className="flex flex-col">
									<a href="tel:+2348111461988">
										<span>Call:</span>
										<span>+2348111461988</span>
									</a>
									<a
										href="https://wa.me/+41779084193"
										target="_blank"
									>
										<span>Whatsapp:</span>
										<span>+41779084193</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactUsPage;
