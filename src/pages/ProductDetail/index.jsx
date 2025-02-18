import React, { useRef, useState } from 'react';
import ProductZoom from '../../components/Comman/ProductZoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import VerticalSwiperSlider from '../../components/Comman/VerticalSwiperSlider';


const ProductDetail = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const [number, setNumber] = useState(0)
    const [active, setActive] = useState(0)
    const [ratingValue, setRatingValue] = useState(2);
    const zoomsliderBig = useRef()
    const zoomsliderSmall = useRef()
    const goTo = (index) => {
        setSliderIndex(index)
        zoomsliderBig.current.swiper.slideTo(index)
        zoomsliderSmall.current.swiper.slideTo(index)
    }
    const imageList = [
        {
            src: 'https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg',
        },
        {
            src: 'https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg',
        },
        {
            src: 'https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg',
        },
        {
            src: 'https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg',
        },
        {
            src: 'https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg',
        },
        {
            src: 'https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg',
        },
    ];
    console.log(ratingValue);

    return (
        <section className="bg-white py-5">
            <div className="container mx-auto">
                <div className="productMainContainer flex flex-wrap lg:flex-nowrap gap-4">
                    {/* Left Image Section */}
                    <div className="imagesection flex flex-col lg:flex-row gap-4 w-full lg:w-1/3">
                        {/* Vertical Image Slider */}
                        <div className="verticalScroll w-full lg:w-[15%] xl:h-[400px] lg:h-[300px] overflow-hidden relative">
                            <VerticalSwiperSlider
                                slidesPerView={4}
                                navigation={true}
                                swiperModules={[Navigation]}
                                spaceBetween={10}
                                className="verticalSwiper !py-5 h-full"
                            >
                                {imageList.map((curEle, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="item rounded-md overflow-hidden cursor-pointer group"
                                    >
                                        <div
                                            className="image-container w-full h-full rounded-md"
                                            onClick={() => goTo(index)}
                                        >
                                            <img
                                                src={curEle.src}
                                                alt={`Product Slide ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </VerticalSwiperSlider>
                        </div>

                        {/* Main Product Zoom Section */}
                        <div className="productZoomContainer w-full lg:w-[78%] h-[400px]">
                            <Swiper
                                cssMode={true}
                                ref={zoomsliderBig}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="largeimageSwiper h-full"
                            >
                                {imageList.map((curEle, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="item rounded-md !w-full !h-full overflow-hidden cursor-pointer group "
                                    >
                                        <div className='!w-full !h-full '>
                                            <ProductZoom
                                                src={curEle.src}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="rightcontent w-full lg:w-2/3 flex flex-col gap-3  pr-14">
                        <h1 className='text-2xl font-medium'>A-Line Kurti With Sharara & Dupatta</h1>
                        <p className='opacity-85 font-medium my-[-4px]'>Brand: <span className='ms-2 font-normal'>Sangria</span></p>
                        <div className='flex items-center gap-3'>
                            <Stack spacing={1} >
                                <Rating name="half-rating-read " defaultValue={2.5} precision={0.5} readOnly className='!text-lg' />
                            </Stack> <span className='ms-[-3px] text-md opacity-85'>(6 review)</span>
                        </div>
                        <p className='mt-[-6px]'>
                            <span className="line-through font-medium">$45.00</span>
                            <span className="ms-3 text-primary font-medium">$30.00</span>
                        </p>
                        <button className="bg-[#00b853] rounded-xl bg-opacity-20 w-20 p-1 px-2 flex items-center justify-center">
                            <span className="text-[#00b853] font-medium text-[12px]">IN STOCK</span>
                        </button>

                        <p className='text-sm opacity-75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className='flex items-center gap-3'>
                            <p>Size:</p>
                            <button className='border w-7 px-1'>S</button>
                            <button className='border w-7 px-1'>M</button>
                            <button className='border w-7 px-1'>L</button>
                        </div>

                        <p className='text-sm opacity-75'>Free Shipping (Est.Delivery Time 2-3 Days)</p>
                        <button className='flex items-center gap-2 link text-sm border w-36 rounded-lg px-2 py-1 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200'>
                            <FaRegHeart />
                            Add to Wishlist
                        </button>
                        <div className='flex items-center gap-4'>
                            <button className='flex items-center'>
                                <div className='border flex items-center gap-2'>
                                    <div className='mx-2 w-3'>{number}</div>
                                    <div className='ms-2 flex flex-col items-center border-l-2 px-1'>
                                        <IoIosArrowUp
                                            className='border-b-2'
                                            onClick={() => {
                                                if (number < 50) {
                                                    setNumber(number + 1);
                                                } else {
                                                    console.log("order cannot exceed 50");
                                                }
                                            }}
                                        />
                                        <IoIosArrowDown
                                            onClick={() => {
                                                if (number > 0) {
                                                    setNumber(number - 1);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </button>
                            <button className='flex items-center gap-2 bg-primary text-white px-3 py-[6px] rounded-lg w-36'>
                                <MdOutlineShoppingCart className='text-lg' />
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
                <div className="detailsection">
                    <div className="typecontainer flex gap-4 mt-8 px-3">
                        <h2 className='text-xl font-medium opacity-90' onClick={() => setActive(0)}>Description</h2>
                        <h2 className='text-xl font-medium opacity-90' onClick={() => setActive(1)}>Product Details</h2>
                        <h2 className='text-xl font-medium opacity-90' onClick={() => setActive(2)}>Review(4)</h2>
                    </div>
                    <div className='detailcontent mt-4 border shadow-lg rounded-lg p-6'>
                        {
                            active === 0 &&
                            <div className='flex flex-col gap-1'>
                                <p className='opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo commodi ex aut incidunt culpa dolorum maxime minus officia quae.</p>
                                <h3 className='text-lg font-medium'>Lightweight Design</h3>
                                <p className='opacity-90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, fugiat quia nobis iste minima ipsam cum reiciendis quod cupiditate beatae!</p>
                                <h3 className='text-lg font-medium'>Free Shiping & Return</h3>
                                <p className='opacity-90'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo saepe minus, nostrum ab voluptas totam provident dolorem dolor quidem velit? Cum odio enim consequuntur quidem nam sunt eos? Sunt.</p>
                                <h3 className='text-lg font-medium'>Money Back Garentee</h3>
                                <p className='opacity-90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, modi!</p>
                            </div>
                        }
                        {
                            active === 1 &&


                            <div class="productDetailSection relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Color
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td class="px-6 py-4">
                                                $2999
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td class="px-6 py-4">
                                                White
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td class="px-6 py-4">
                                                $1999
                                            </td>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td class="px-6 py-4">
                                                Black
                                            </td>
                                            <td class="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td class="px-6 py-4">
                                                $99
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                        {
                            active === 2 &&
                            <div className='reviewSection overflow-y-scroll h-[400px]'>
                                <h3 className='text-xl font-medium ms-2 text-[rgba(0,0,0,0.8)]'>Customer questions & answers</h3>
                                <div className="review">
                                    <div className="addReview bg-[#fafafa] rounded-lg border p-4 w-[95%] mx-auto mt-4">
                                        <h3 className='text-lg font-medium py-1 text-[rgba(0,0,0,0.8)]'>Add a review</h3>
                                        <form className='flex flex-col gap-3 mt-3'>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                rows={4}
                                                defaultValue="Default Value"
                                            />
                                            <Rating
                                                name="half-rating-read"
                                                value={ratingValue}
                                                onChange={(event, newValue) => {
                                                    setRatingValue(newValue)
                                                }}
                                                precision={0.5} />
                                            <button className='border px-3 py-1 w-20 text-center rounded-lg'>Sumit</button>
                                        </form>
                                    </div>
                                    <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                        <div className="review__header__left flex items-center justify-between pb-2">
                                            <div className='flex items-center gap-3'>
                                                <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                                    alt="user"
                                                    className="review__header__left__img w-20" />
                                                <div className="review__header__left__info">
                                                    <h4 className="review__header__left__info__name">John Doe</h4>
                                                    <p className="review__header__left__info__date">2 days ago</p>
                                                </div>
                                            </div>
                                            <div className="rating">
                                                <Rating name="half-rating-read" Value={ratingValue} precision={0.5} readOnly />
                                            </div>
                                        </div>
                                        <div className="reviewDetail w-[89%] ps-2">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                        </div>
                                    </div>
                                    <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                        <div className="review__header__left flex items-center justify-between pb-2">
                                            <div className='flex items-center gap-3'>
                                                <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                                    alt="user"
                                                    className="review__header__left__img w-20" />
                                                <div className="review__header__left__info">
                                                    <h4 className="review__header__left__info__name">John Doe</h4>
                                                    <p className="review__header__left__info__date">2 days ago</p>
                                                </div>
                                            </div>
                                            <div className="rating">
                                                <Rating name="half-rating-read" Value={ratingValue} precision={0.5} readOnly />
                                            </div>
                                        </div>
                                        <div className="reviewDetail w-[89%] ps-2">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                        </div>
                                    </div>
                                    <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                        <div className="review__header__left flex items-center justify-between pb-2">
                                            <div className='flex items-center gap-3'>
                                                <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                                    alt="user"
                                                    className="review__header__left__img w-20" />
                                                <div className="review__header__left__info">
                                                    <h4 className="review__header__left__info__name">John Doe</h4>
                                                    <p className="review__header__left__info__date">2 days ago</p>
                                                </div>
                                            </div>
                                            <div className="rating">
                                                <Rating name="half-rating-read" Value={ratingValue} precision={0.5} readOnly />
                                            </div>
                                        </div>
                                        <div className="reviewDetail w-[89%] ps-2">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div >
        </section >
    );
};

export default ProductDetail;
