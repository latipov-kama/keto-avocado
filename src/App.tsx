import Layout from "./layouts/layout";
import Home from "./pages/home/home";
import Info from "./pages/info/info";
import About from "./pages/about/about";
import Problems from "./pages/problems/problem";
import Service from "./pages/service/service";
import BMI from "./pages/bmi/bmi";
import Results from "./pages/results/results";

function App() {
	return (
		<Layout>
			<Home />
			<About />
			<Info />
			<Service />
			<Problems />
			<Results />
			<BMI />
		</Layout>
	);
}

export default App;
