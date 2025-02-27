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
               <MyList/>

            </div>
        </div>
        </section >
    )
}

export default MyList
