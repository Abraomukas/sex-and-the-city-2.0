import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * PAGES
 */
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact component={Main} />
				<Route path='/about' exact component={AboutMe} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
