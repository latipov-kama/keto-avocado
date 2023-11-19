import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ClientElem from "./client-elem";

import result1 from "../../assets/images/result-1.jpg";
import result2 from "../../assets/images/result-2.jpg";
import result3 from "../../assets/images/result-3.jpg";
import result4 from "../../assets/images/result-4.jpg";
import result5 from "../../assets/images/result-5.jpg";
import result6 from "../../assets/images/result-6.jpg";
import result7 from "../../assets/images/result-7.jpg";
import result8 from "../../assets/images/result-8.jpg";

import "swiper/css";

interface props {}

const ClientList: React.FC<props> = () => {
	return (
		<Swiper
		className="overflow-clip"
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1536: {
          width: 1280,
          slidesPerView: 3
        },
        1280: {
          width: 1280,
          slidesPerView: 3
        },
        1024: {
          width: 1024,
          slidesPerView: 3
        },
        768: {
          width: 768,
          slidesPerView: 3
        },
        640: {
          width: 640,
          slidesPerView: 2
        }
      }}
		>
			<SwiperSlide>
				<ClientElem img={result1} before="101" after="71" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result7} before="99" after="87" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result3} before="68" after="58" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result4} before="82" after="72" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result5} before="141" after="113" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result8} before="" after="" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result2} before="96" after="83" />
			</SwiperSlide>
			<SwiperSlide>
				<ClientElem img={result6} before="76" after="65" />
			</SwiperSlide>
		</Swiper>
	);
};

export default ClientList;
