import Link from "next/link";
import { TbSchool } from "react-icons/tb";
import {
	LuSoup,
	LuSyringe,
	LuDroplets,
	LuHexagon,
	LuCheck,
} from "react-icons/lu";
import Image from "next/image";
import roundImg from "@/public/images/banner-round.png";

function PublicHomePage() {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-xl">
						<h1 className="mb-5  font-bold flex flex-col">
							<span>Welcome to</span>
							<span className="text-5xl">
								Chioma Onwenonye foundation
							</span>
						</h1>
						<p className="mb-5 backdrop-blur p-5 border rounded-2xl">
							At Chioma Onwenonye foundation, we believe in making
							a positive impact, one step at a time. Our
							foundation is built on the pillars of compassion,
							empowerment, and change. With a heartfelt commitment
							to bettering the world around us, we are dedicated
							to creating a brighter future for all.
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<Link
								href="/"
								className="btn btn-primary"
							>
								Get Involved
							</Link>
							<Link
								href="/"
								className="btn btn-outline btn-secondary"
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="card mx-auto p-10 sm:flex-row flex-wrap gap-5">
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-rose-600/10 rounded-full flex justify-center items-center">
						<TbSchool className="w-10 h-10 stroke-rose-600" />
					</div>
					<h2 className="text-xl font-bold text-center">Education</h2>
					<p className="text-sm ">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Explicabo reprehenderit magnam, cupiditate sequi
						repellendus nemo sapiente porro unde beatae rerum!
					</p>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-green-600/10 rounded-full flex justify-center items-center">
						<LuSoup className="w-10 h-10 stroke-green-600" />
					</div>
					<h2 className="text-xl font-bold text-center">Food</h2>
					<p className="text-sm ">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Explicabo reprehenderit magnam, cupiditate sequi
						repellendus nemo sapiente porro unde beatae rerum!
					</p>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-blue-600/10 rounded-full flex justify-center items-center">
						<LuSyringe className="w-10 h-10 stroke-blue-600" />
					</div>
					<h2 className="text-xl font-bold text-center">
						Medical Care
					</h2>
					<p className="text-sm ">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Explicabo reprehenderit magnam, cupiditate sequi
						repellendus nemo sapiente porro unde beatae rerum!
					</p>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-amber-600/10 rounded-full flex justify-center items-center">
						<LuDroplets className="w-10 h-10 stroke-amber-600" />
					</div>
					<h2 className="text-xl font-bold text-center">Water</h2>
					<p className="text-sm ">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Explicabo reprehenderit magnam, cupiditate sequi
						repellendus nemo sapiente porro unde beatae rerum!
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 px-10">
				<div className="flex-1 relative">
					<div className="relative">
						<div className="relative overflow-hidden w-full rounded-full aspect-square">
							<Image
								fill
								src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
						</div>
						<div className="absolute w-1/3 aspect-square rounded-full border-4 overflow-hidden bottom-0 right-10">
							<Image
								fill
								src="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
					</div>
					<div className="absolute top-0">
						<Image
							src={roundImg}
							alt=""
							className="animate-[spin_20s_linear_infinite]"
						/>
					</div>
				</div>
				<div className="flex-1 space-y-5">
					<h2 className="flex gap-1 items-center text-primary">
						<LuHexagon className="w-5 h-5" />
						ABOUT US
					</h2>
					<h3 className="font-bold text-2xl sm:text-4xl">
						If we are Helping Each others Human then the world will
						be always happy.
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Possimus nulla mollitia incidunt assumenda
						necessitatibus ratione delectus, perferendis ab suscipit
						nemo nesciunt hic nihil error? Veritatis, officiis amet.
						Eius laborum soluta nobis magni debitis, facere magnam
						possimus ratione. Dolore, nostrum tempora ipsa atque
						repellat laudantium recusandae qui voluptatem aliquam,
						fugiat ducimus.
					</p>
					<ul>
						<li className="flex gap-1 items-center">
							<LuCheck className="stroke-primary" />
							Honesty
						</li>
						<li className="flex gap-1 items-center">
							<LuCheck className="stroke-primary" />
							Transparency
						</li>
						<li className="flex gap-1 items-center">
							<LuCheck className="stroke-primary" />
							Improvement
						</li>
					</ul>
					<div>
						<Link
							href="/"
							className="btn btn-primary"
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default PublicHomePage;
