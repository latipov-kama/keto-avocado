import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ClientElem from "./client-elem";
import { results } from "../../constants/results";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ClientList: React.FC = () => {
	return (
		<Swiper
			className="results__swiper"
			modules={[Navigation, Autoplay]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			spaceBetween={20}
			loop={true}
			slidesPerView={1}
			onSlideChange={() => console.log()}
			onSwiper={() => console.log()}
			breakpoints={{
				1536: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 2,
				},
			}}
		>
			{results.map((item, idx) => (
				<SwiperSlide key={idx}>
					<ClientElem {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ClientList;
