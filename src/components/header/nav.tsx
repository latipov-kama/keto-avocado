import React from "react";

interface props {}

const Nav: React.FC<props> = () => {
	return (
		<nav>
			<ul className="hidden md:flex items-center gap-6 font-medium">
				<li>
					<div>Обо мне</div>
				</li>
				<li>
					<div>О курсе</div>
				</li>
				<li>
					<div>Отзывы</div>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
