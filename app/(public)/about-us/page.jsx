import roundImg from "@/public/images/banner-round.png";
import Image from "next/image";
import Link from "next/link";
import {
	LuBook,
	LuCalendarDays,
	LuGrip,
	LuHexagon,
	LuMoveRight,
	LuNewspaper,
	LuStar,
} from "react-icons/lu";
import CoverImage from "../components/cover";

function AboutUsPage() {
	return (
		<>
			<CoverImage title="About Us" />

			<div className="text-center px-10 py-20 sm:p-20">
				<h2 className="text-4xl sm:text-6xl font-bold">
					We are here to help
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore natus magni ratione ipsa rem enim sit quod officia
					ipsam laborum!
				</p>
			</div>

			<div className="px-10">
				<h2 className="text-center text-2xl">
					<LuBook className="stroke-orange-400 inline-block" /> Our
					Story
				</h2>
				<div className="flex flex-col sm:flex-row gap-5 mt-10">
					<div className="relative flex-1 h-48 aspect-video sm:aspect-auto sm:h-auto rounded-2xl overflow-hidden">
						<Image
							fill
							src="https://images.pexels.com/photos/11742874/pexels-photo-11742874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Chioma Onwenonye"
							className="object-cover"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-4xl font-bold">
							The struggle was real
						</h3>
						<div className="space-y-3 my-5">
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Ex, quidem totam sit ad
								quaerat voluptates perspiciatis fugiat hic
								provident consequatur suscipit obcaecati odio, a
								veritatis atque enim dignissimos, quae saepe.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Atque quibusdam eum voluptatem
								minima quaerat vitae sunt quisquam nulla
								reprehenderit, corporis culpa nam. Autem, fuga
								soluta? Aliquid mollitia quo commodi quis
								laudantium suscipit dolorum ipsum deserunt
								adipisci excepturi modi saepe doloremque atque
								omnis doloribus tenetur labore, praesentium
								maiores. Dolor, laboriosam quibusdam?
							</p>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Dicta provident dolorem
								temporibus, itaque reprehenderit rerum ipsum
								voluptatum veritatis cumque sint.
							</p>
						</div>
						<div>
							<p className="font-bold">Chioma Onwenonye</p>
							<p className="text-xs italic">CEO/Founder</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row">
				<div className="flex-1 border border-l-0 p-10 space-y-4">
					<h2 className="text-3xl font-bold">Our Mission</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ea minus autem temporibus at eligendi, eius
						explicabo. Nostrum assumenda tempora vitae!
					</p>
					<ul className="list-disc list-inside">
						<li>Lorem, ipsum.</li>
						<li>Quisquam, dolores.</li>
						<li>Qui, commodi?</li>
						<li>Deserunt, minus.</li>
					</ul>
				</div>
				<div className="flex-1 bg-primary/10 p-10 space-y-4">
					<h2 className="text-3xl font-bold">Our Vission</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ea minus autem temporibus at eligendi, eius
						explicabo. Nostrum assumenda tempora vitae!
					</p>
					<ul className="list-disc list-inside">
						<li>Lorem, ipsum.</li>
						<li>Quisquam, dolores.</li>
						<li>Qui, commodi?</li>
						<li>Deserunt, minus.</li>
					</ul>
				</div>
			</div>

			<div className="px-10">
				<div className="text-center">
					<h2 className="text-2xl text-center">
						<LuStar className="inline-block stroke-success" /> Our
						Team
					</h2>
					<p className="text-4xl sm:text-6xl font-bold">
						Meet the team
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

			<div className="flex flex-col sm:flex-row-reverse gap-10 px-10">
				<div className="flex-1 relative">
					<div className="relative">
						<div className="relative overflow-hidden w-full rounded-2xl aspect-square">
							<Image
								fill
								src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
						</div>
						<div className="absolute w-1/3 aspect-square rounded-full border-4 overflow-hidden bottom-0 right-10">
							<Image
								fill
								src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
						TEAM WORK
					</h2>
					<h3 className="font-bold text-2xl sm:text-4xl">
						If we Helping Each other then the world growing.
					</h3>
					<div className="space-y-3">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Possimus nulla mollitia incidunt assumenda
							necessitatibus ratione delectus, perferendis ab
							suscipit nemo nesciunt hic nihil error? Veritatis,
							officiis amet. Eius laborum soluta nobis magni
							debitis, facere magnam possimus ratione. Dolore,
							nostrum tempora ipsa atque repellat laudantium
							recusandae qui voluptatem aliquam, fugiat ducimus.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Sit qui quidem adipisci cum ea! Porro fugit
							cupiditate obcaecati ullam natus!
						</p>
					</div>
				</div>
			</div>

			<div className="px-10">
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
			</div>
		</>
	);
}

export default AboutUsPage;
