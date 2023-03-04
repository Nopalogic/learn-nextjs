import style from './footer.module.css';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.content}>
				<div className={style.leftBox}>
					<div className="upper">
						<div className={style.topic}>About us</div>
						<p>CodingLab is a channel where you can learn HTML, CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
					</div>
					<div className={style.lower}>
						<div className={style.topic}>Contact us</div>
						<div className="phone">
							<a href="#">
								<i className="fas fa-phone-volume"></i>+007 9089 6767
							</a>
						</div>
						<div className="email">
							<a href="#">
								<i className="fas fa-envelope"></i>abc@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div className="middle box">
					<div className={style.topic}>Our Services</div>
					<div>
						<a href="#">Web Design, Development</a>
					</div>
					<div>
						<a href="#">Web UX Design, Reasearch</a>
					</div>
					<div>
						<a href="#">Web User Interface Design</a>
					</div>
					<div>
						<a href="#">Theme Development, Design</a>
					</div>
					<div>
						<a href="#">Mobile Application Design</a>
					</div>
					<div>
						<a href="#">Wire raming & Prototyping</a>
					</div>
				</div>
			</div>
			<div className="bottom">
				<p>
					Copyright © 2020 <a href="#">CodingLab</a> All rights reserved
				</p>
			</div>
		</footer>
	);
}
