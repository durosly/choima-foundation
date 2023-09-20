import Link from "next/link";
import { TbSchool } from "react-icons/tb";
import {
	LuSoup,
	LuSyringe,
	LuDroplets,
	LuHexagon,
	LuCheck,
	LuHeart,
	LuGraduationCap,
	LuGlassWater,
	LuHammer,
	LuPersonStanding,
	LuShrub,
	LuStar,
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
				<div className="sm:w-[calc(50%_-_1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
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
					<div className="absolute top-0 w-full overflow-hidden">
						<Image
							src={roundImg}
							alt=""
							className="animate-[spin_20s_linear_infinite] object-contain"
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
			<div className="px-10">
				<div className="text-center space-y-5 mb-10">
					<p className="capitalize text-xl">
						<LuHeart className="inline-block w-5 h-5 stroke-red-500" />{" "}
						Helping People is what we love
					</p>
					<h2 className="flex flex-col text-4xl sm:text-6xl font-bold">
						<span>Find a cause</span>
						<span>and donate to them</span>
					</h2>
				</div>

				<div className="flex flex-col sm:flex-row gap-5 flex-wrap">
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden">
						<div className=" h-48 relative">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuGraduationCap className="w-6 h-6 stroke-primary " />
							</div>
						</div>
						<div className="p-5 bg-primary/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam
								ipsam mollitia eum sint tempora distinctio
								temporibus repellendus!
							</p>
							<div className="text-right">
								<span className="badge badge-primary rounded-2xl">
									Education
								</span>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden">
						<div className=" h-48 relative">
							<Image
								fill
								src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuSyringe className="w-6 h-6 stroke-secondary " />
							</div>
						</div>
						<div className="p-5 bg-secondary/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Provide medical attention to all
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam
								ipsam mollitia eum sint tempora distinctio
								temporibus repellendus!
							</p>
							<div className="text-right">
								<span className="badge badge-secondary rounded-2xl">
									Medical
								</span>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden">
						<div className=" h-48 relative">
							<Image
								fill
								src="https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuGlassWater className="w-6 h-6 stroke-primary " />
							</div>
						</div>
						<div className="p-5 bg-primary/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Every one deserves clean water
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam
								ipsam mollitia eum sint tempora distinctio
								temporibus repellendus!
							</p>
							<div className="text-right">
								<span className="badge badge-primary rounded-2xl">
									Water
								</span>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden">
						<div className=" h-48 relative">
							<Image
								fill
								src="https://images.pexels.com/photos/18025831/pexels-photo-18025831/free-photo-of-man-making-pottery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuHammer className="w-6 h-6 stroke-accent " />
							</div>
						</div>
						<div className="p-5 bg-accent/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Skilled individuals provide more value to the
								society
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam
								ipsam mollitia eum sint tempora distinctio
								temporibus repellendus!
							</p>
							<div className="text-right">
								<span className="badge badge-accent rounded-2xl">
									Training
								</span>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden">
						<div className=" h-48 relative">
							<Image
								fill
								src="https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuSoup className="w-6 h-6 stroke-primary " />
							</div>
						</div>
						<div className="p-5 bg-primary/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Feed the hungry
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam
								ipsam mollitia eum sint tempora distinctio
								temporibus repellendus!
							</p>
							<div className="text-right">
								<span className="badge badge-primary rounded-2xl">
									Education
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row">
				<div className="flex-1 relative overflow-hidden">
					<Image
						fill
						src="https://images.pexels.com/photos/2962135/pexels-photo-2962135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="object-cover"
					/>
				</div>
				<div className="flex-1 px-5 py-10 space-y-7 bg-base-200/50">
					<h2 className="text-3xl sm:text-4xl font-bold capitalize">
						<LuPersonStanding className="inline-block stroke-amber-600" />
						More people, more impact
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis similique nulla ipsam molestias quas eaque
						velit quibusdam ducimus voluptatum eos!
					</p>
					<div className="pr-5 space-y-5">
						<div className="flex gap-5">
							<div className="w-20 aspect-square bg-primary flex justify-center items-center self-start">
								<LuShrub className="w-10 h-10 stroke-white" />
							</div>
							<div>
								<h3 className="text-2xl font-bold">
									Transparency
								</h3>
								<p>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Eos, minima?
								</p>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="w-20 aspect-square bg-primary flex justify-center items-center self-start">
								<LuShrub className="w-10 h-10 stroke-white" />
							</div>
							<div>
								<h3 className="text-2xl font-bold">Strength</h3>
								<p>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Eos, minima?
								</p>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="w-20 aspect-square bg-primary flex justify-center items-center self-start">
								<LuShrub className="w-10 h-10 stroke-white" />
							</div>
							<div>
								<h3 className="text-2xl font-bold">Unity</h3>
								<p>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Eos, minima?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-10">
				<div className="text-center">
					<h2 className="text-2xl text-center">
						<LuStar className="inline-block stroke-success" /> Our
						Team
					</h2>
					<p className="text-4xl sm:text-6xl font-bold">
						Meet the team behind the establishment
					</p>
				</div>

				<div className="flex flex-wrap gap-5 sm:gap-10 justify-center mt-5">
					<div>
						<div className="relative w-40 mx-auto aspect-square rounded-full overflow-hidden border-4">
							<Image
								fill
								src="/images/teams/chioma.jpg"
								alt="Chioma Onwenonye"
								className="object-cover"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-bold">Chioma Onwenonye</h3>
							<p>CEO/Founder</p>
						</div>
					</div>
					<div>
						<div className="relative w-40 mx-auto aspect-square rounded-full overflow-hidden border-4">
							<Image
								fill
								src="/images/teams/janet.jpg"
								alt="Janet De Sanctis"
								className="object-cover"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-bold">Janet De Sanctis</h3>
							<p>Team Manager/ Volunteer</p>
						</div>
					</div>
					<div>
						<div className="relative w-40 mx-auto aspect-square rounded-full overflow-hidden border-4">
							<Image
								fill
								src="/images/teams/effmann.jpg"
								alt="Pierre Eggmann"
								className="object-cover"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-bold">Pierre Eggmann</h3>
							<p>Team Assistant</p>
						</div>
					</div>

					<div>
						<div className="relative w-40 mx-auto aspect-square rounded-full overflow-hidden border-4">
							<Image
								fill
								src="/images/teams/grace.jpg"
								alt="Chioma Onwenonye"
								className="object-cover"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-bold">
								Grace C. EDIGBUE, <br />
								Esq. LL.B, <br />
								M.Sc (Social Works), <br />
								AICMC.
							</h3>
							<p>Legal Adviser</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PublicHomePage;
