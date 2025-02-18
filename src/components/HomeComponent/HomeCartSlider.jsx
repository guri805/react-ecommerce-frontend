import React from 'react';
import SwiperSlider  from '../Comman/SwiperSlider';// import the SwiperSlider component
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react'; // Import SwiperSlide

const HomeCartSlider = () => {
    const categories = [
        { title: "Fashion", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
        { title: "Smartphone", image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg" },
    ];

    return (
        <div className="homeCartSlider mb-4">
            <div className="container">
                <SwiperSlider slidesPerView={7} spaceBetween={10} autoplay={false} className="mySwiper">
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}> 
                            <Link to='/'>
                                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                    <img src={category.image} alt={category.title} className="transition-all" />
                                    <h3>{category.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    );
};

export default HomeCartSlider;
