import React from 'react'
import Sidebar from "../../components/AdminComponent/Sidebar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Button } from '@mui/material';
import Badge from '../../components/Comman/Badge';

const AdminOrder = () => {
    return (
        <section className="cart-page py-5">
            <div className="container flex gap-5 ">
                <div className="leftPart w-1/4">
                    <Sidebar/>
                </div>
                <div className="rightPart w-3/4">
                    <div className="cartHeader p-3 border-b-2">
                        <h2 className='font-medium'>My Order</h2>
                        <p className='capitalize'>There are <span className='font-bold text-primary'>2</span> products in your my order</p>
                        <div className="productDetailSection relative overflow-x-auto mt-5">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminOrder
