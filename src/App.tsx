import Layout from "./layouts/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
// import Results from "./pages/results/results";

function App() {
	return (
		<Layout>
			<Home />
			<About />

			<section className="max-w-[1144px] mx-auto px-8">
				<div className="my-20 ">
					<fieldset className="px-6 sm:px-12 py-8 border-[1px] border-gray-400 text-left">
						<legend>
							<span className="text-xl  sm:text-2xl text-gray-800 font-medium">
								Проблемы связанные с питанием
							</span>
						</legend>

						<div className="md:flex">
							<ul className="flex-1 flex flex-col gap-2 sm:text-lg uppercase text-gray-800">
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Лишний вес
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Плохой сон
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Зависимость к
									еде
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Головные боли
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Плохое состояние
									кожи
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Нехватка энергии
								</li>
							</ul>
							<ul className="flex-1 flex flex-col gap-2 sm:text-lg uppercase text-gray-800">
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Лишний вес
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Плохой сон
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Зависимость к
									еде
								</li>
								<li>
									<span className="text-[#15C39A] mr-2">✔</span>Головные боли
								</li>
							</ul>
						</div>
					</fieldset>
				</div>
			</section>
		</Layout>
	);
}

export default App;
