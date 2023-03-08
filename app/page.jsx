import style from './page.module.css';

export default function Home() {
	return (
		<div>
			<section className="h-screen flex flex-col justify-center items-center z-[-2] bg-neutral-800 text-neutral-100">
				<h1>Welcome To My Website</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
			</section>

			{/* About */}
			<section className='px-6 bg-neutral-800 text-neutral-100'>
				<div className={style.row}>
					<div className={style.column}></div>
					<div className={style.column}>
						<h3>Naufal Adhi Ramadhan</h3>
						<p>
							Web developer and <span>Student</span>
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio */}
			<section className='px-6 bg-neutral-800 text-neutral-100'>
				<div className={style.row}>
					<div className={style.column}>
						<div className={style.heading}>
							<h3>Heading</h3>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat rem praesentium? Aspernatur recusandae temporibus quia harum ducimus ratione tempore explicabo veniam
								consequatur?
							</p>
						</div>
					</div>
					<div className={style.column} id={style.right}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat sunt odio illo. Magni quasi sunt, distinctio quam deserunt incidunt impedit! Dolore cum laudantium minus culpa
							placeat esse sit quo cumque molestiae, rem voluptate nam consectetur necessitatibus molestias laboriosam eligendi laborum excepturi. Iste praesentium porro ipsam tempora consectetur,
							accusamus maxime?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat sunt odio illo. Magni quasi sunt, distinctio quam deserunt incidunt impedit! Dolore cum laudantium minus culpa
							placeat esse sit quo cumque molestiae, rem voluptate nam consectetur necessitatibus molestias laboriosam eligendi laborum excepturi. Iste praesentium porro ipsam tempora consectetur,
							accusamus maxime?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat sunt odio illo. Magni quasi sunt, distinctio quam deserunt incidunt impedit! Dolore cum laudantium minus culpa
							placeat esse sit quo cumque molestiae, rem voluptate nam consectetur necessitatibus molestias laboriosam eligendi laborum excepturi. Iste praesentium porro ipsam tempora consectetur,
							accusamus maxime?
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
