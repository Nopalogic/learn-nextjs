import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='w-full fixed z-[10] px-6 py-4 bg-neutral-900'>
			<div className='flex justify-between'>
				<div className="font-bold text-neutral-100">
					<Link href={'/'}>BRAND</Link>
				</div>
				<div className='flex justify-around gap-6 text-neutral-100'>
					<Link href={'/'}>Home</Link>
					<Link href={'/about'}>About</Link>
					<Link href={'/'}>Portfolio</Link>
					<Link href={'/'}>Services</Link>
				</div>
			</div>
		</nav>
	);
}
