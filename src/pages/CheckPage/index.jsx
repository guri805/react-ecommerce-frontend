import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const Checkout = () => {
    return (
        <section className='py-10'>
            <div className="container flex gap-5">
                <div className="leftCol w-[70%]">
                    <div className="card bg-white shadow-md p-5 rounded-md w-full">
                        <h1>Billing Details</h1>
                        <form className='w-full flex flex-col gap-3 mt-3'>
                            <div className="flex gap-4 w-full">
                                <TextField type='text' label="Full Name" variant="outlined" size='small' className='w-full' />
                                <TextField label="Email" type='email' variant="outlined" size='small' className='w-full' />
                            </div>
                            <h3>Street Address*</h3>
                            <TextField type='text' label="House No and Street Name" variant="outlined" size='small' className='w-full' />
                            <TextField type='text' label="Apartment, suite, unit, etc.(optional)" variant="outlined" size='small' className='w-full' />
                            <TextField type='text' label="Town/City" variant="outlined" size='small' className='w-full' />
                            <TextField type='text' label="State/Country" variant="outlined" size='small' className='w-full' />
                            <h3>Postcode/ZIP*</h3>
                            <TextField type='text' label="Zip Code" variant="outlined" size='small' className='w-full' />
                            <div className="flex gap-4">
                                <TextField type='text' label="Phone Number" variant="outlined" size='small' />
                                <TextField label="Email Address" type='email' variant="outlined" size='small' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightCol w-[30%]">
                    <div className="card bg-white shadow-md p-5 rounded-md">
                        <h2>Your Order</h2>
                        <div className="flex justify-between items-center py-3 px-2 border-y-2 border-[rgba(0,0,0,0.2)]">
                            <span className=''>Product</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                            <div className="info flex flex-col gap-3 py-2">
                                <div className="part1 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="image w-[55px] h-[55px] object-cover overflow-hidden group rounded-md cursor-pointer">
                                            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full transition-all group-hover:scale-105' />
                                        </div>
                                        <div className="info">
                                            <h4 className='text-sm'>A-Line Kurti With Sh..</h4>
                                            <span className='text-sm'>Qty: 1</span>
                                        </div>
                                    </div>
                                    <p className="price text-sm font-medium">
                                        1300.00
                                    </p>
                                </div>
                                <div className="part1 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="image w-[55px] h-[55px] object-cover overflow-hidden group rounded-md cursor-pointer">
                                            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full transition-all group-hover:scale-105' />
                                        </div>
                                        <div className="info">
                                            <h4 className='text-sm'>A-Line Kurti With Sh..</h4>
                                            <span className='text-sm'>Qty: 1</span>
                                        </div>
                                    </div>
                                    <p className="price text-sm font-medium">
                                        1300.00
                                    </p>
                                </div>
                                <div className="part1 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="image w-[55px] h-[55px] object-cover overflow-hidden group rounded-md cursor-pointer">
                                            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full transition-all group-hover:scale-105' />
                                        </div>
                                        <div className="info">
                                            <h4 className='text-sm'>A-Line Kurti With Sh..</h4>
                                            <span className='text-sm'>Qty: 1</span>
                                        </div>
                                    </div>
                                    <p className="price text-sm font-medium">
                                        1300.00
                                    </p>
                                </div>
                                <div className="part1 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="image w-[55px] h-[55px] object-cover overflow-hidden group rounded-md cursor-pointer">
                                            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full transition-all group-hover:scale-105' />
                                        </div>
                                        <div className="info">
                                            <h4 className='text-sm'>A-Line Kurti With Sh..</h4>
                                            <span className='text-sm'>Qty: 1</span>
                                        </div>
                                    </div>
                                    <p className="price text-sm font-medium">
                                        1300.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button className='uppercase !bg-primary !text-white !w-full !mt-4'>Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
