import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const AddCart = () => {
    const [number, setNumber] = useState(1)
    return (
        <section className="cart-page py-5">
            <div className="container ">
                <div className="maincontainer flex my-5 gap-4">
                    <div className="leftPart w-[70%]">
                        <div className="card shadow-md rounded-md bg-white p-3">
                            <div className="cartHeader p-3 border-b-2">
                                <h2 className='font-medium'>Your Cart</h2>
                                <p>There are <span className='font-bold'>2</span> products in your cart</p>
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
                                </div>
                                <div className="remove absolute top-1 right-2 p-2 cursor-pointer">
                                    <button className='text-red-500'>Remove</button>
                                </div>
                            </div>
                            <div className="cartItem border-b-2 w-full p-3 flex items-center gap-4 relative">
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
                                </div>
                                <div className="remove absolute top-1 right-2 p-2 cursor-pointer">
                                    <button className='text-red-500'>Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="rightPart w-[30%]">
                        <div className="card shadow-md rounded-md p-3 bg-white flex flex-col gap-2 ">
                            <h2 className='font-medium border-b-2 pb-2'>Card Total</h2>
                            <div className="flex justify-between mt-1">
                                <p>Subtotal</p>
                                <p className='text-primary font-bold'>$60.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p className='font-medium'>Free</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total</p>
                                <p className='font-medium'>$60.00</p>
                            </div>
                            <button className='bg-primary text-white w-full rounded-md mt-3 p-2'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCart
