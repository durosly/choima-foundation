import roundImg from "@/public/images/banner-round.png";
import Image from "next/image";
import Link from "next/link";
import {
	LuCheck,
	LuDroplets,
	LuGlassWater,
	LuGraduationCap,
	LuHammer,
	LuHeart,
	LuHexagon,
	LuPersonStanding,
	LuShrub,
	LuSoup,
	LuStar,
	LuSyringe,
} from "react-icons/lu";
import { TbSchool } from "react-icons/tb";

function PublicHomePage() {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
				}}
			>
				<div className="hero-overlay bg-opacity-70"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-xl">
						<h1 className="mb-5  font-bold flex flex-col">
							<span>Welcome to</span>
							<span className="text-5xl">
								Chioma Onwenonye foundation
							</span>
						</h1>
						<p className="mb-5 backdrop-blur p-5 border rounded-2xl">
							An organisation for change, providing care and
							support to over 20 communities with 5 years to our
							journey. We believe in making a positive impact, one
							step at a time. With a heartfelt commitment to
							bettering the world around us, we are dedicated to
							creating a brighter future for all.
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<Link
								href="/support"
								className="btn btn-primary"
							>
								Get Involved
							</Link>
							<Link
								href="/about-us"
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
						By supporting us, you contribute towards providing
						quality education and empowering children with knowledge
						for a better tomorrow. Remember, education is the key to
						breaking the cycle of poverty.
					</p>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-green-600/10 rounded-full flex justify-center items-center">
						<LuSoup className="w-10 h-10 stroke-green-600" />
					</div>
					<h2 className="text-xl font-bold text-center">Food</h2>
					<p className="text-sm ">
						Ensuring that nutritious meals reach those who need them
						the most is our top-most priority. Join us in fighting
						hunger and malnutrition.
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
						Access to healthcare is a basic human right. Through our
						foundation, we strive to improve healthcare services in
						disadvantaged areas and your donations make it possible
						for us to bring quality healthcare closer to those who
						need it most.
					</p>
				</div>
				<div className="sm:w-[calc(50%-1.25rem)] md:flex-1 flex flex-col gap-3 border p-5 rounded-2xl">
					<div className="w-16 aspect-square mx-auto bg-amber-600/10 rounded-full flex justify-center items-center">
						<LuDroplets className="w-10 h-10 stroke-amber-600" />
					</div>
					<h2 className="text-xl font-bold text-center">Water</h2>
					<p className="text-sm ">
						Providing safe drinking water sources and sanitation
						facilities to communities without access can be made
						possible. Together, we can quench their thirst.
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 px-10">
				<div className="flex-1 relative">
					<div className="relative">
						<div className="relative overflow-hidden w-full rounded-full aspect-square">
							<Image
								fill
								src="/images/vision.jpg"
								alt=""
							/>
						</div>
						<div className="absolute w-1/3 aspect-square rounded-full border-4 overflow-hidden bottom-0 right-10">
							<Image
								fill
								src="/images/vision-alt.jpg"
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
						Our Mission: Promoting Global Happiness Through
						Humanitarian Efforts
					</h3>
					<p>
						At Chioma Foundation, we are driven by a profound belief
						that if we come together to help one another, we can
						create a world filled with happiness and prosperity. Our
						foundation is dedicated to making a positive impact on
						the lives of people around the globe.
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
							href="/about-us"
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
								Build Secure and care-free life for the needy
							</h2>
							<p>
								Prioritizing the safety and well-being of the
								communities we serve. Through our initiatives,
								essential protection and security measures can
								be given, ensuring lives can be lived without
								fear
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
								src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
							<div className="flex justify-center items-center absolute top-5 left-5 w-10 aspect-square rounded-full bg-white/80">
								<LuSyringe className="w-6 h-6 stroke-secondary " />
							</div>
						</div>
						<div className="p-5 bg-secondary/10 space-y-5">
							<h2 className="font-bold text-2xl">
								Ensuring Access to Quality Healthcare for All
							</h2>
							<p>
								Our unwavering commitment is to provide
								comprehensive medical attention to individuals
								from all walks of life. We firmly believe that
								everyone deserves access to quality healthcare
								services.
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
								we are passionate about ensuring that every
								individual has access to clean and safe drinking
								water. We believe that access to clean water is
								a basic human right, and we are committed to
								making this a reality for communities around the
								world.
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
								Nurturing Talents and Creating opportunities
							</h2>
							<p>
								Every individual has unique talents waiting to
								be discovered. Our care foundation provides
								opportunities for those in need, empowering them
								to unleash their potential and create a brighter
								future.
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
								With your support, nutritious meals and access
								to clean water for underserved communities can
								be made possible.
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
						src="/images/more-people.jpg"
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
						At Chioma Foundation, our mission is to make a
						difference in the world. We believe that by coming
						together, we can create a greater impact and bring about
						positive change.
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
									At Chioma Foundation, transparency is at the
									core of our values. We believe in open and
									honest communication with our supporters,
									partners, and beneficiaries.
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
									Chioma Foundation is committed to building
									strength in our communities. Through our
									programs and initiatives, we empower
									individuals and communities to overcome
									challenges and reach their full potential.
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
									Unity is the driving force behind Chioma
									Foundation. We believe that when we come
									together as a community, we can achieve
									remarkable things.
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

			<div
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
				}}
				className="text-center py-20 px-10 space-y-5 bg-no-repeat bg-cover bg-center text-white"
			>
				<h2 className="text-4xl font-bold">Your Donation Matters</h2>
				<p>
					We rely on generous donations and sponsorships from people
					like you who share our vision of creating a better world.
					Your contributions directly assist our efforts to provide
					critical resources and services to those in greatest need.
				</p>
				<Link
					href="/support"
					className="btn btn-primary"
				>
					Donate now
				</Link>
			</div>
			<div className="py-10 px-5 text-center">
				<iframe
					// width="560"
					// height="315"
					className="w-[80%] max-w-[560px] aspect-video mx-auto"
					src="https://www.youtube.com/embed/ug-M2Gcyb2g?si=MPEFPrZ03lsD51rE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<p className="text-2xl rounded-xl italic border border-dashed inline-block p-5">
					A helping hand can be a ray of sunshine in a cloudy world.
				</p>
			</div>
			{/* <div className="px-10">
				<div>
					<h2 className="text-xl">
						<LuNewspaper className="inline-block stroke-indigo-700" />{" "}
						Latest Blog
					</h2>
					<p className="text-4xl font-bold">
						Latest news, articles and events
					</p>
				</div>
				<div className="flex flex-col sm:flex-row gap-5 flex-wrap mt-10">
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden p-3 bg-primary/10">
						<div className=" h-32 relative rounded-xl overflow-hidden">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
						<div className=" space-y-2 mt-5">
							<p className="text-slate-500 flex gap-2 items-center">
								<LuCalendarDays className="inline-block stroke-current" />{" "}
								27/04/2024
							</p>
							<h2 className="font-semibold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam...
							</p>
							<div className="text-right">
								<Link
									href="/"
									className="link link-hover"
								>
									Read more{" "}
									<LuMoveRight className="inline stroke-primary" />
								</Link>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden p-3 bg-primary/10">
						<div className=" h-32 relative rounded-xl overflow-hidden">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
						<div className=" space-y-2 mt-5">
							<p className="text-slate-500 flex gap-2 items-center">
								<LuCalendarDays className="inline-block stroke-current" />{" "}
								27/04/2024
							</p>
							<h2 className="font-semibold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam...
							</p>
							<div className="text-right">
								<Link
									href="/"
									className="link link-hover"
								>
									Read more{" "}
									<LuMoveRight className="inline stroke-primary" />
								</Link>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden p-3 bg-primary/10">
						<div className=" h-32 relative rounded-xl overflow-hidden">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
						<div className=" space-y-2 mt-5">
							<p className="text-slate-500 flex gap-2 items-center">
								<LuCalendarDays className="inline-block stroke-current" />{" "}
								27/04/2024
							</p>
							<h2 className="font-semibold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam...
							</p>
							<div className="text-right">
								<Link
									href="/"
									className="link link-hover"
								>
									Read more{" "}
									<LuMoveRight className="inline stroke-primary" />
								</Link>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden p-3 bg-primary/10">
						<div className=" h-32 relative rounded-xl overflow-hidden">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
						<div className=" space-y-2 mt-5">
							<p className="text-slate-500 flex gap-2 items-center">
								<LuCalendarDays className="inline-block stroke-current" />{" "}
								27/04/2024
							</p>
							<h2 className="font-semibold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam...
							</p>
							<div className="text-right">
								<Link
									href="/"
									className="link link-hover"
								>
									Read more{" "}
									<LuMoveRight className="inline stroke-primary" />
								</Link>
							</div>
						</div>
					</div>
					<div className="sm:w-[calc((100%_-_2_*_1.25rem_)_/_3)] rounded-xl overflow-hidden p-3 bg-primary/10">
						<div className=" h-32 relative rounded-xl overflow-hidden">
							<Image
								fill
								src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
								className="object-cover"
							/>
						</div>
						<div className=" space-y-2 mt-5">
							<p className="text-slate-500 flex gap-2 items-center">
								<LuCalendarDays className="inline-block stroke-current" />{" "}
								27/04/2024
							</p>
							<h2 className="font-semibold text-2xl">
								Build secure life for the poor
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Asperiores esse quae veniam...
							</p>
							<div className="text-right">
								<Link
									href="/"
									className="link link-hover"
								>
									Read more{" "}
									<LuMoveRight className="inline stroke-primary" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default PublicHomePage;
