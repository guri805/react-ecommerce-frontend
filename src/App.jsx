import React, { useState, createContext, useRef } from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductList from "./pages/ProductList";
import Footer from "./components/Comman/Footer";
import ProductDetail from "./pages/ProductDetail";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/Comman/ProductZoom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import AddCart from "./pages/Cart";
import Verify from "./pages/Verify";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/CheckPage";
import MyAccount from "./pages/MyAccount"
import MyList from "./pages/MyList";
// Create a context
const AppContext = createContext();

function App() {
  const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
  const [maxWidth, setMaxWidth] = useState('md');
  const [sliderIndex, setSliderIndex] = useState(0)
  const [number, setNumber] = useState(0)
  const [isLogin, setIsLogin] = useState(true)
  const zoomsliderBig = useRef()
  const zoomsliderSmall = useRef()
  const goTo = (index) => {
    setSliderIndex(index)
    zoomsliderBig.current.swiper.slideTo(index)
    zoomsliderSmall.current.swiper.slideTo(index)
  }
  const handleClickOpenProductDetailModel = () => {
    setOpenProductDetailModel(true);
  };

  const handleCloseOpenProductDetailModel = () => {
    setOpenProductDetailModel(false);
  };
  const openAlertBox = (status,msg) =>{
    if (status==="success") {
      toast.success(msg); 
    }
    if (status==="error") {
      toast.error(msg);
    }
  }

  const value = {
    setOpenProductDetailModel,
    openAlertBox,
    isLogin,
    setIsLogin
  };
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

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={value}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<AddCart />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgotPassword" element={<ForgotPassword/>}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
      <Toaster />


      <Dialog
        open={openProductDetailModel}
        maxWidth={maxWidth}
        onClose={handleCloseOpenProductDetailModel}
        className="productDetailModel"
      >
        <DialogContent className="productDetailModelContent flex items-center w-full">
          <div className="col1 flex w-full xl:w-[30%] items-center justify-between gap-4">
            {/* Vertical Scrollable Swiper */}
            <div className="verticalScroll w-[15%] xl:h-[255px] lg:h-[200px] overflow-hidden relative">
              <Swiper
                cssMode={true}
                ref={zoomsliderSmall}
                navigation={true}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation]}
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
              </Swiper>
            </div>

            {/* Main Product Zoom Area */}
            <div className="productZoomContainer w-full lg:w-[80%] h-[255px]">
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
          <div className="col2">
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
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { AppContext };