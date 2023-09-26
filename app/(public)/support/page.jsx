import React from "react";
import { LuGrip } from "react-icons/lu";
import { BsPaypal } from "react-icons/bs";

function SupportPage() {
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
						Support
					</h1>
				</div>
				<LuGrip className="stroke-white w-14 h-14 inline-block absolute bottom-4 right-4" />
			</div>
			<h2 className="text-4xl text-center font-bold px-5 sm:px-10">
				Join us in helping millions of others in need
			</h2>
			<div className="px-5">
				<div className="max-w-md p-5 mx-auto bg-slate-100 rounded-md">
					<h3 className="text-2xl font-bold">Donation methods</h3>
					<div className="space-y-3">
						<div>
							<h4 className="font-bold">Bank Transfer</h4>
							<p className="flex flex-wrap gap-2 text-sm">
								<span>Bank name:</span>
								<span>FCMB</span>
							</p>
							<p className="flex flex-wrap gap-2 text-sm">
								<span>Account Name:</span>
								<span>Chioma Onwenonye Foundation</span>
							</p>
							<p className="flex flex-wrap gap-2 text-sm">
								<span>Account Number:</span>
								<span>2001075110</span>
							</p>
						</div>
						<div>
							<h4 className="font-bold">Crypto</h4>
							<p className="flex flex-wrap gap-2 text-sm">
								<span>Token:</span>
								<span>Bitcoin</span>
							</p>
							<p className="flex flex-wrap gap-2 text-sm">
								<span>Address:</span>
								<span>
									bc1q7ujlzr7vkynwwnfsh3t3vu4jwanmquetjll2v4
								</span>
							</p>
						</div>
						<div>
							<h4 className="font-bold">Paypal</h4>
							<a
								href="https://www.paypal.me/ChiomaOnwenonye"
								target="_blank"
								className="btn btn-primary"
							>
								<BsPaypal />
								<span>PayPal</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SupportPage;
