import React from 'react';

function Footer() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light h-100 d-flex justify-content-between align-items-center'>
			<div className='container p-4'>
				{/* TEXT */}

				<section>
					<div>
						<div className='row d-flex justify-content-center'>
							<div className='col-auto'>
								<p>
									<strong>Sex and the City 2.0</strong>
								</p>
							</div>
						</div>
						<div className='row d-flex justify-content-center'>
							<div className='col-auto'>
								<p>
									<strong>Somewhere in Dubai</strong>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
}

export default Footer;
