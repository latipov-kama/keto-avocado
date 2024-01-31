import Layout from "./layouts/layout";
import Home from "./sections/home/home";
import Course from "./sections/course/course";
import About from "./sections/about/about";
import Problems from "./sections/problems/problem";
import Service from "./sections/service/service";
import BMI from "./sections/bmi/bmi";
import Results from "./sections/results/results";

function App() {

	return (
		<Layout>
			<Home />
			<About />
			<Course />
			<Service />
			<Problems />
			<Results />
			<BMI />
		</Layout>
	);
}

export default App;
