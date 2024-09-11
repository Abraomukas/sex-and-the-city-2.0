import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * PAGES
 */
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import Stories from './pages/Stories';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact component={Main} />
				<Route path='/about' exact component={AboutMe} />
				<Route path='/blog' exact component={Stories} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
