import Link from 'next/link';
import style from './navbar.module.css';

export default function Navbar() {
	return (
		<nav className={style.nav}>
			<div className={style.container}>
				<div className={style.brand}>
					<Link href={'/'}>BRAND</Link>
				</div>
				<div className={style.links}>
					<Link href={'/'}>Home</Link>
					<Link href={'/about'}>About</Link>
					<Link href={'/'}>Portfolio</Link>
					<Link href={'/'}>Services</Link>
				</div>
			</div>
		</nav>
	);
}
