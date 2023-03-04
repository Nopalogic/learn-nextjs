import style from './footer.module.css';
import Link from 'next/link';

// referensi / sources
// https://codepen.io/scanfcode/pen/MEZPNd

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.left}>
						<h6 className={style.heading}>About</h6>
						<p className="text-justify">
							Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the
							code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
							Algorithm.
						</p>
					</div>

					<div className={style.middle}>
						<h6 className={style.heading}>Categories</h6>
						<div className={style.links}>
							<Link href="http://scanfcode.com/category/front-end-development/">UI Design</Link>
							<Link href="http://scanfcode.com/category/back-end-development/">PHP</Link>
							<Link href="http://scanfcode.com/category/java-programming-language/">Java</Link>
							<Link href="http://scanfcode.com/category/android/">Android</Link>
							<Link href="http://scanfcode.com/category/templates/">Templates</Link>
						</div>
					</div>

					<div className={style.right}>
						<h6 className={style.heading}>Quick Links</h6>
						<div className={style.links}>
							<Link href="http://scanfcode.com/about/">About Us</Link>
							<Link href="http://scanfcode.com/contact/">Contact Us</Link>
							<Link href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link>
							<Link href="http://scanfcode.com/privacy-policy/">Privacy Policy</Link>
							<Link href="http://scanfcode.com/sitemap/">Sitemap</Link>
						</div>
					</div>
				</div>
				<hr className={style.line} />
			</div>
			<div className={style.container}>
				<div className={style.bottom}>
					<div className={style.colLeft}>
						<p className="copyright-text">
							Copyright &copy; 2017 All Rights Reserved by <a href="#">Scanfcode</a>.
						</p>
					</div>

					<div className={style.colRight}>
						<ul className={style.socialMedia}>
							<li>
								<a className="facebook" href="#">
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a className="twitter" href="#">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a className="dribbble" href="#">
									<i className="fa fa-dribbble"></i>
								</a>
							</li>
							<li>
								<a className="linkedin" href="#">
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
