export default function Home() {
	const projects = [
		{ link: '#', name: 'Project1' },
		{ link: '#', name: 'Project2' },
		{ link: '#', name: 'Project3' },
		{ link: '#', name: 'Project4' },
		{ link: '#', name: 'Project5' },
	];

	return (
		<div>
			<section className="h-screen flex flex-col justify-center items-center z-[-2] bg-neutral-800 text-neutral-100">
				<h1 className="text-6xl pb-5 font-medium">Welcome To My Website</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
			</section>

			{/* About */}
			<section className="p-6 bg-neutral-800 text-neutral-100">
				<div className="pb-5 text-center">
					<h3>about</h3>
				</div>
				<div className="flex">
					<div className="w-1/2"></div>
					<div className="w-1/2">
						<h3>Naufal Adhi Ramadhan</h3>
						<p>
							Web developer and <span>Student</span>
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio */}
			<section className="h-screen p-6 bg-neutral-800 text-neutral-100">
				<div className="flex">
					<div className="w-1/2">
						<div className="">
							<h3>Portfolio</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat rem praesentium? Aspernatur recusandae temporibus quia harum ducimus ratione tempore explicabo veniam
								consequatur?
							</p>
						</div>
					</div>
					<div className="w-1/2 overflow-y-auto h-[90vh]">
						{projects.map((project, i) => (
							<div key={i} className="w-[300px] h-[225px] bg-neutral-700 rounded-xl my-4">
								{project.name}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
