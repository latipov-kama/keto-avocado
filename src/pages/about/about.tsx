import aboutImg from "../../assets/images/about.png";
// import { Element } from "react-scroll";
// import certificate from "../../assets/images/certificate.jpg";

const About: React.FC = () => {
	return (
		<section className="bg-[#f9f9f4] relative">
			<div className="max-w-[1144px] mx-auto px-8 pb-14 pt-20 text-center">
				<h2 className="title mb-5 text-3xl text-[#333] font-bold">
					Страдаешь из-за лишнего веса?
				</h2>
				<p className="title text-lg text-[#15C39A] font-bold">
					Ты не один. И я здесь, чтобы помочь!
				</p>

				<div className="mt-20 flex flex-col-reverse md:flex-row justify-around items-center gap-10">
					<div className="flex flex-col text-center md:text-left">
						<h2 className="mb-8 text-xl text-[#333] font-medium">
							Меня зовут <br />
							<span className=" text-4xl text-[#FFC47C]"> Камол Латипов</span>
						</h2>
						<p className="max-w-[500px] text-[#666] font-medium">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
							nulla vero deleniti autem in molestias fuga velit voluptate aut
							quas laborum nobis a consequuntur alias cum libero ex fugit
							necessitatibus atque, eligendi possimus omnis! Velit omnis
							pariatur delectus vitae ab?
						</p>
					</div>

					<div className="max-w-[220px] rounded-full pr-4 pt-4 overflow-hidden bg-[#34545a]">
						<img src={aboutImg} />
					</div>
				</div>
			</div>
			<div className="w-full absolute top-0 left-0 z-10">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2dnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCAxNDBWMFM5OTMuNDYgMTQwIDY0MCAxMzkgMCAwIDAgMHYxNDB6Ii8+PC9nPjwvc3ZnPg=="
					className="w-full h-16 rotate-180"
					alt=""
				/>
			</div>
		</section>
	);
};

export default About;
