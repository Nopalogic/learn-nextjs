export default function Home() {
	const projects = [
		{ link: '#', name: 'Project1', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?' },
		{ link: '#', name: 'Project2', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?' },
		{ link: '#', name: 'Project3', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?' },
		{ link: '#', name: 'Project4', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?' },
		{ link: '#', name: 'Project5', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?' },
	];

	const skills = [
		{ name: 'HTML', status: 'advance' },
		{ name: 'CSS', status: 'advance' },
		{ name: 'Javascript', status: 'advance' },
	];

	return (
		<div>
			<section className="h-screen flex flex-col justify-center items-center z-[-2] bg-neutral-800 text-neutral-100">
				<h1 className="text-6xl pb-5 font-medium">Welcome To My Website</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
			</section>

			{/* About */}
			<section className="p-6 bg-neutral-800 text-neutral-100">
				<div className="container">
					<div className="flex flex-wrap">
						<div className="mb-10 w-full px-4 lg:w-1/2">
							<h4 className="mb-3 text-lg font-bold uppercase text-neutral-100">About</h4>
							<h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">Mari ngoding bersama Nopal</h2>
							<p className="max-w-xl text-base font-medium text-neutral-400 lg:text-lg">Mahasiswa Teknik Informatika yang bercita-cita menjadi Fullstack Web Developer</p>
						</div>
						<div className="px-4 w-full lg:w-1/2">
							<h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">Let's be friends</h3>
							<p className="mb-6 text-base font-medium text-neutral-400 lg:text-lg">Mari berteman dengan saya</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="pt-36 pb-16 bg-neutral-800">
				<div className="container">
					<div className="w-full px-4">
						<div className="mx-auto mb-16 max-w-xl text-center">
							<h4 className="mb-2 text-lg font-semibold text-primary">Skills</h4>
							<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Skills</h2>
							<p className="text-md font-medium text-neutral-400 md:text-lg">Ini adalah beberapa project yang telah saya buat, baik untuk pribadi maupun tugas mata kuliah.</p>
						</div>
					</div>
					<div className="mx-auto flex w-full justify-center px-4 xl:w-10/12">
						{skills.map((skill, i) => (
							<div key={i} className="mb-6 mx-3 p-4 w-64 h-72 rounded-xl bg-neutral-900 relative flex justify-center">
								<div className="overflow-hidden rounded-full shadow-md bg-white w-40 h-40">
									{/* <img src="" alt="blom ada ya. sabar dulu" width="w-full" /> */}
								</div>
								<div className="absolute bottom-3 text-center">
									<h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">{skill.name}</h3>
									<p className="text-base font-medium text-neutral-400">{skill.status}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Portfolio */}
			<section id="portfolio" className="bg-neutral-800 pt-36 pb-16">
				<div className="container">
					<div className="w-full px-4">
						<div className="mx-auto mb-16 max-w-xl text-center">
							<h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
							<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Lastest Project</h2>
							<p className="text-md font-medium text-neutral-400 md:text-lg">Ini adalah beberapa project yang telah saya buat, baik untuk pribadi maupun tugas mata kuliah.</p>
						</div>
					</div>

					<div className="mx-auto flex w-full flex-wrap justify-center px-4 xl:w-10/12">
						{projects.map((project, i) => (
							<div key={i} className="mb-12 p-4 md:w-1/2">
								<div className="overflow-hidden rounded-md shadow-md">
									<img src="" alt="blom ada ya. sabar dulu" width="w-full" />
								</div>
								<h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">{project.name}</h3>
								<p className="text-base font-medium text-neutral-400">{project.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
