import Link from 'next/link';
import style from './navbar.module.css';

const NavItem = ({ text, href, active }) => {
	return <Link href={href} className={!active ? style.link : style.active}>{text}</Link>;
};

export default NavItem;
