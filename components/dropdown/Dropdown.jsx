'use client';

import { useState } from 'react';
import style from './dropdown.module.css';

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

  const handleClick = ()=>{
    setIsOpen(!isOpen);
  }

	return (
		<div className={style.container}>
			<button className={style.button} onClick={handleClick}>Refrences</button>
			<div className={isOpen ? style.menuOpen : style.close}>
				<button className={style.menuButton}>Account</button>
				<button className={style.menuButton}>Settings</button>
				<button className={style.menuButton}>Sign Out</button>
			</div>
		</div>
	);
}
