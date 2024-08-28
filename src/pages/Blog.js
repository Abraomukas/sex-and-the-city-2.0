import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

export default function Blog() {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	return (
		<div
			style={{
				position: 'relative',
				minHeight: '100vh',
			}}></div>
	);
}
