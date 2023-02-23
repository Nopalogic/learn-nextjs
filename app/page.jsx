import style from './page.module.css';

export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.column}>
				<div className={style.badge}>	
					<span>application</span>
				</div>
				<div>
					<h1 className={style.title}>Business Travel <span className={style.bar}>Management</span> Solutions.</h1>
					<p className={style.subtitle}>
						A universal solution for <span className={style.bold}>traveling costumers</span> and companies providing comperhensive travel services around the world.
					</p>
					<button className={style.button}>
						<span>get started</span> <span>icon</span>
					</button>
				</div>
			</div>
			<div className={style.column}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita nisi quis placeat cum fugit, sequi cumque rerum? Exercitationem sit dolorem excepturi recusandae, aliquid quis optio suscipit saepe nam. Optio?</div>
		</div>
	);
}
