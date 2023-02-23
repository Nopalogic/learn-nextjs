import Link from 'next/link';
import style from './navbar.module.css'

export default function Navbar() {
	return (
			<nav className={style.nav}>
				<div className={style.brand}>
					<Link href={'/'}>SOONFLY</Link>
				</div>
				<div className={style.links}>
					<Link href={'/'}>About</Link>
					<Link href={'/'}>Services</Link>
					<Link href={'/'}>Blog</Link>
					<Link href={'/'}>Solutions</Link>
				</div>
				<button className={style.startedButton}>Get Started</button>
			</nav>
	);
}
