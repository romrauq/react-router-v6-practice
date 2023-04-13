import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/services">Services</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
};

export default App;
