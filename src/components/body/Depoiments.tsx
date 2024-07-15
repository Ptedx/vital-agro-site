import { SectionDepoimentStyle, SwiperItem } from "../../styled-components/body/DepoimentStyle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper/modules';
import MobileSize from "../general/WidthChecker";

const Depoiments = () => {

    const slides = [
        {id: 1, content: '/img/Doggo_1.jpg'},
        {id: 2, content: '/img/Doggo_2.jpg'},
        {id: 3, content: '/img/Doggo_3.jpg'},
        {id: 4, content: '/img/Doggo_4.jpg'},
        {id: 5, content: '/img/Doggo_5.jpg'},
        {id: 6, content: '/img/Doggo_6.jpg'},
        {id: 7, content: '/img/Doggo_7.jpg'},
        {id: 8, content: '/img/Doggo_8.jpg'},
        {id: 9, content: '/img/Doggo_9.jpg'},
        {id: 10, content: '/img/Doggo_10.jpg'},
        {id: 11, content: '/img/Doggo_11.jpg'},
        {id: 12, content: '/img/Doggo_12.jpg'},
    ]
    return (
        <SectionDepoimentStyle>
            <h1>Galeria</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay]}
                slidesPerView={MobileSize(768) ? 2: 3}
                spaceBetween={25}
                loop={true}
                autoplay= {{delay: 0, disableOnInteraction: false}}
                speed={2000}
                >
                {slides.map((slide)=>(                    
                    <SwiperSlide key={slide.id}>
                        <SwiperItem>
                            <img src={slide.content} width="100%" alt={"Doggo"} />
                        </SwiperItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionDepoimentStyle>
    );
}

export default Depoiments;
