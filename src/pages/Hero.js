import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

export default function Hero() {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	const values = [
		{ icon: 'fa-solid fa-person', tag: 'diversity', to: '' },
		{ icon: 'fa-solid fa-users', tag: 'trust', to: '' },
		{ icon: 'fa-solid fa-stopwatch', tag: 'productivity', to: '' },
	];

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<h3>
				<Trans i18nKey={'hero.header'} />
			</h3>
		</div>
	);
}
