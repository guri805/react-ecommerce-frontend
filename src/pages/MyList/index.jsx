import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Button } from '@mui/material';
import MyAccountLeftSideBar from '../../components/Comman/MyAccountLeftSideBar';
const MyList = () => {
    const [number, setNumber] = useState(1)
    return (
        <section className="cart-page py-5">
            <div className="container flex gap-5 ">
            <div className="leftPart w-1/4">
                <MyAccountLeftSideBar />
            </div>
            <div className="rightPart w-3/4">
                <div className="card shadow-md rounded-md bg-white p-3">
                    <div className="cartHeader p-3 border-b-2">
                        <h2 className='font-medium'>My List</h2>
                        <p className='capitalize'>There are <span className='font-bold text-primary'>2</span> products in your my list</p>
                    </div>
                    <div className="cartItem w-full p-3 flex items-center gap-4 relative border-b-2 my-2 ">
                        <div className="image rounded-md overflow-hidden flex flex-col gap-1 w-[15%]">
                            <Link to="/product/1" className='group'>
                                <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full group-hover:scale-105 transition-all' />
                            </Link>
                        </div>
                        <div className="info w-[85%]">
                            <h2>Sangria</h2>
                            <p>A-Line Kurti With Sharara & Dupatta</p>
                            <p>
                                <span className="line-through font-medium">$45.00</span>
                                <span className="ms-3 text-primary font-medium">$30.00</span>
                                <span className='ms-3 text-primary font-medium'>50% OFF</span>
                            </p>
                            {/* <div className="flex gap-2 items-center">
                                        <label htmlFor=" size ">Size:</label>
                                        <select name="size" id="size" className='border border-gray-300 rounded-md px-1'>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                        <div className="quantity flex items-center ">
                                            <p className='mr-2'>Quantity: </p>
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
                                        </div>
                                    </div> */}
                            <Button className='!bg-primary !text-white '>Add To Cart</Button>
                        </div>
                        <div className="remove absolute top-1 right-2 p-2 cursor-pointer">
                            <button className='text-red-500'>Remove</button>
                        </div>
                    </div>
                    <div className="cartItem w-full p-3 flex items-center gap-4 relative border-b-2 my-2 ">
                        <div className="image rounded-md overflow-hidden flex flex-col gap-1 w-[15%]">
                            <Link to="/product/1" className='group'>
                                <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full group-hover:scale-105 transition-all' />
                            </Link>
                        </div>
                        <div className="info w-[85%]">
                            <h2>Sangria</h2>
                            <p>A-Line Kurti With Sharara & Dupatta</p>
                            <p>
                                <span className="line-through font-medium">$45.00</span>
                                <span className="ms-3 text-primary font-medium">$30.00</span>
                                <span className='ms-3 text-primary font-medium'>50% OFF</span>
                            </p>
                            {/* <div className="flex gap-2 items-center">
                                        <label htmlFor=" size ">Size:</label>
                                        <select name="size" id="size" className='border border-gray-300 rounded-md px-1'>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                        <div className="quantity flex items-center ">
                                            <p className='mr-2'>Quantity: </p>
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
                                        </div>
                                    </div> */}
                            <Button className='!bg-primary !text-white '>Add To Cart</Button>
                        </div>
                        <div className="remove absolute top-1 right-2 p-2 cursor-pointer">
                            <button className='text-red-500'>Remove</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section >
    )
}

export default MyList
