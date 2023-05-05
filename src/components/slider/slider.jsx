import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./slider.css";

function Slider() {

    const slides = [{ id: "1", img: "https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" },
    { id: "2", img: "https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" },
    { id: "3", img: "https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" },
    { id: "4", img: "https://www.hoodie-egresados.com/web/images/buzos.png" },
    { id: "5", img: "https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" },
    { id: "6", img: "https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" },
    { id: "7", img: "https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" },
    { id: "8", img: "https://www.hoodie-egresados.com/web/images/buzos.png" },
    { id: "9", img: "https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" },
    { id: "10", img: "https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" },
    { id: "11", img: "https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" },
    { id: "12", img: "https://www.hoodie-egresados.com/web/images/buzos.png" },
    { id: "13", img: "https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" },
    { id: "14", img: "https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" },
    { id: "15", img: "https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" },
    { id: "16", img: "https://www.hoodie-egresados.com/web/images/buzos.png" },]

    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {slides.map((slide) => {
                return (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.img} alt="Egresados" className="img-slide" />
                    </SwiperSlide>
                )
            })}

        </Swiper>

    );

};

export default Slider;

/*
<img src="https://i.pinimg.com/originals/f2/58/02/f2580275e8a0294209452613af088032.jpg" alt="egresados" />
<img src="https://i.pinimg.com/474x/51/6b/73/516b73fd830cf122eba9ff3279b6bed3.jpg" alt="egresados" />
<img src="https://static.wixstatic.com/media/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg/v1/fill/w_640,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f45411_6f105ce2f92141639cce5fd3dd9d3fea~mv2.jpg" alt="egresados" />
<img src="https://www.hoodie-egresados.com/web/images/buzos.png" alt="egresados" />
*/