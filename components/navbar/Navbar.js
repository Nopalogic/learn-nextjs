import Link from 'next/link';
import style from './navbar.module.css'

export default function Navbar() {
	return (
			<nav className={style.nav}>
				<div className={style.brand}>
					<Link href={'/'}>BRAND</Link>
				</div>
				<div className={style.links}>
					<Link href={'/'}>About</Link>
					<Link href={'/'}>Portfolio</Link>
					<Link href={'/'}>Services</Link>
				</div>
			</nav>
	);
}
