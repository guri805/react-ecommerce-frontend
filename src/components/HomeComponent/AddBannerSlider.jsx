import React from 'react';
import SwiperSlider from '../Comman/SwiperSlider';
import Bannerbox from '../Comman/Bannerbox';
import { SwiperSlide } from 'swiper/react';

const AddBannerSlider = () => {
    const images = [
        { source: "banner7.jpg", alt: "banner image 1" },
        { source: "banner8.jpg", alt: "banner image 2" },
        { source: "banner9.jpg", alt: "banner image 3" },
        { source: "banner10.jpg", alt: "banner image 4" },
        { source: "banner11.webp", alt: "banner image 5" },
    ];

    return (
        <div className="addBannerSlider">
            <SwiperSlider slidesPerView={4} spaceBetween={10} autoplay={false} className="swiperAddBannerSlider">
                {images.map((curEle, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <div className="box py-7 px-3 bg-white rounded-sm">
                            <Bannerbox src={curEle.source} alt={curEle.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        </div>
    );
}

export default AddBannerSlider;
