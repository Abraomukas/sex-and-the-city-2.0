import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './i18n';
import './index.css';

const spinnerSizing = { width: '3rem', height: '3rem' };

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div className='spinner-border' style={spinnerSizing} role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

/**
 * PAGES
 */
import Error from './pages/Error';
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import Stories from './pages/Stories';
import Story from './pages/Story';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <Error />,
	},
	{
		path: '/contact',
		element: <AboutMe />,
		errorElement: <Error />,
	},
	{
		path: '/blog',
		element: <Stories />,
		errorElement: <Error />,
	},
	{
		path: '/blog/:story',
		element: <Story />,
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);