/** @format */

import "./App.scss";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Header from "./components/Home/Header";
import Projects from "./components/Home/Projects";
import Sec1 from "./components/Home/Section1";
import Skills from "./components/Home/Skills";
import {Helmet} from "react-helmet";


const App = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Syed Ateeb</title>
				<link rel='canonical' href='http://mysite.com/example' />
				<meta name="description" content="Portfolio" />
			</Helmet>

			<div className='everyThing'>
				<Header />
				<Sec1 />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
};
export default App;
