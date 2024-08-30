import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			<div className='container'>
				{/* HEADER */}

				<div className='position-relative p-5 p-md-1 m-md-1 text-center'>
					<div className='col-md-6 p-lg-5 mx-auto mt-3'>
						<h1 className='display-3 fw-bold'>
							<Trans i18nKey={'careers.header'} />
						</h1>
					</div>
				</div>

				{/* GRID */}

				<div className='container mb-7'>
					<div className='row gx-3 d-flex justify-content-center'>
						{stories.map((story, index) => {
							return (
								<div
									key={index}
									className='col-lg-4 col-md-12 mb-3 text-center'>
									<div key={index}>
										<Link key={index} to={`${story.label}`}>
											<div key={index} className='text-bg-primary p-3'>
												<h2
													key={index}
													className='display-5 d-flex align-items-center justify-content-center'
													style={{ minHeight: '115px' }}>
													<Trans key={index} i18nKey={''} />
												</h2>
											</div>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
