import React from 'react';
import Cookies from 'js-cookie';
import { Trans, useTranslation } from 'react-i18next';

export default function Story() {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<h3>
				<Trans i18nKey={'story.header'} />
			</h3>
		</div>
	);
}
