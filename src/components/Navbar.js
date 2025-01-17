import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { Trans, useTranslation } from 'react-i18next';

const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Italiano', country_code: 'it' },
];

const sections = [
	{ label: 'Stories', to: '/blog' },
	{ label: 'About Me', to: '/contact' },
];

function Navbar(props) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const currentLngCode = Cookies.get('i18next') || 'gb';

	const { t } = useTranslation();

	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${
				isDarkMode ? 'dark' : 'light'
			} bg-${
				isDarkMode ? 'dark' : 'light'
			} h-100 d-flex justify-content-between align-items-center`}>
			<div className='navbar-left'>
				{/* BRAND */}
				<div className='navbar-middle d-flex align-items-center mx-auto'>
					<a href='/'>
						<img
							src='./images/logo.png'
							height='80'
							alt='Logo'
							loading='lazy'
						/>
					</a>
				</div>
			</div>
			<div className='navbar-middle'>
				{/* LINKS */}
				<button
					className='navbar-brand navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fas fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						{/* SECTIONS */}
						{sections.map(({ label, to }, index) => {
							return (
								<li key={index} className='nav-item'>
									<Trans i18nKey={`pages.${label}`}>
										<Link key={index} className='nav-link' to={to}>
											{t(label)}
										</Link>
									</Trans>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className='navbar-right'>
				<div className='container'>
					<div className='row d-flex align-items-center'>
						<div className='col'>
							{/* DARK MODE */}
							<div className='dropdown'>
								<a
									className='text-reset me-3'
									href='#'
									role='button'
									aria-expanded='false'
									onClick={() => {
										setIsDarkMode(!isDarkMode);
									}}>
									{isDarkMode ? (
										<i className='fas fa-sun' style={{ color: '#ffffff' }} />
									) : (
										<i className='fas fa-moon' style={{ color: '#000000' }} />
									)}
								</a>
							</div>
						</div>
						<div className='col'>
							{/* LANGUAGES */}
							<div className='dropdown'>
								<a
									className='text-reset me-3 dropdown-toggle hidden-arrow'
									href='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									<i
										className='fas fa-globe'
										style={{ color: isDarkMode ? '#ffffff' : '#000000' }}></i>
								</a>
								<ul
									className='dropdown-menu dropdown-menu-end'
									aria-labelledby='navbarDropdownMenuLink'>
									{languages.map(({ name, country_code }, index) => {
										return (
											<li key={index}>
												<button
													key={index}
													className='dropdown-item'
													onClick={() => {
														i18next.changeLanguage(country_code);
														window.location.reload();
													}}
													disabled={country_code === currentLngCode}>
													<span
														key={index}
														className={`fi fi-${country_code} fis mx-3`}
														style={{
															opacity:
																country_code === currentLngCode ? 0.5 : 1,
														}}
													/>

													{name}
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
