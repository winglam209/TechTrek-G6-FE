import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import GroupFinder from './pages/groupfinder';
import IndexSwap from './pages/indexswap';
import forum from './pages/forum';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/indexswap' component={IndexSwap} />
		<Route path='/groupfinder' component={GroupFinder} />
		<Route path='/forum' component={forum} />
	</Routes>
	</Router>
);
}

export default App;
