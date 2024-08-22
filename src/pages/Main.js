import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//* PAGES
import Hero from './Hero';

export default function Main() {
	const sections = [Hero];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* SECTIONS */}
			{sections.map((SectionComponent, index) => (
				<section key={index}>
					<div key={index}>
						<SectionComponent key={index} />
					</div>
				</section>
			))}

			<Footer />
		</div>
	);
}
