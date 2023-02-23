import style from './page.module.css';

export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.column}>
				<div className={style.badge}>
					<span>application</span>
				</div>
				<div>
					<h1 className={style.title}>
						Business Travel <span className={style.bar}>Management</span> Solutions.
					</h1>
					<p className={style.subtitle}>
						A universal solution for <span className={style.bold}>traveling costumers</span> and companies providing comperhensive travel services around the world.
					</p>
					<button className={style.button}>
						<span>get started</span> <span>&rarr;</span>
					</button>
				</div>
			</div>
			<div className={style.column}>
				<div className={style.wrapper}>
					<div className={style.box}>
						<div className={style.class}>class</div>
						<div className={style.date}>date</div>
					</div>
					<div className={style.box}>
						<div className={style.info}>information details</div>
						<div className={style.direction}>from</div>
						<div className={style.direction}>to</div>
						<div className={style.ticket}>tikcet barcode</div>
					</div>
				</div>
			</div>
		</div>
	);
}
