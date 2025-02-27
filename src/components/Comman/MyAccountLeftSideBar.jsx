import React from 'react'
import { RiUploadCloudFill } from "react-icons/ri";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { Button } from '@mui/material';
import { MdLogout } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const MyAccountLeftSideBar = () => {
    return (
        <div className="card shadow-md bg-white rounded-md sticky top-[10px]">
            <div className="w-full p-3 flex items-center justify-center flex-col">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                    <img src="https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="avatar image" className='w-full h-full' />
                    <div className="overlay w-full h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all ">
                        <RiUploadCloudFill className="text-[#fff] text-[25px]" />
                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0' />
                    </div>
                </div>
                <h3 className="font-medium capitalize text-[rgba(0,0,0,0.7)]">
                    Gursangam singh
                </h3>
                <h5 className="font-medium text-sm text-[rgba(0,0,0,0.7)]">gursangamsingh2@gmail.com</h5>
            </div>

            <ul className='myAccounrTabs sideStripe list-none'>

                <li className='w-full '>
                    <NavLink to={"/myaccount"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='!flex !items-baseline !justify-start !gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px] !capitalize'>
                            <FaRegUser className='text-[16px]' />
                            My Profile
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full '>
                    <NavLink to={"/mylist"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='!flex !items-baseline !justify-start !gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px] !capitalize'>
                            <FaRegHeart className='text-[16px]' />
                            My List
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full '>
                    <NavLink to={"/myorder"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='!flex !items-baseline !justify-start !gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px] !capitalize'>
                            <IoBagCheckOutline className='text-[16px]' />
                            My Order
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full '>
                    <NavLink to={"/logout"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='!flex !items-baseline !justify-start !gap-2 !w-full !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px] !capitalize'>
                            <MdLogout className='text-[16px]' />
                            Logout
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MyAccountLeftSideBar
