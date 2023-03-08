import './globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
