import { Button } from '@mui/material'
import React, { useState } from 'react'
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Collapse } from 'react-collapse';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const location = useLocation();

    // Check if current route belongs to Products or Categories
    const isProductActive = location.pathname.startsWith("/product");
    const isCategoryActive = location.pathname.startsWith("/category");

    const toggleSubmenu = (index) => {
        setSubmenuIndex(submenuIndex === index ? null : index);
    };

    return (
        <div className='card p-3 shadow-md bg-white rounded-md sticky top-[10px]'>
            <h2 className='text-2xl text-center text-primary font-semibold py-2'>Admin Panel</h2>
            <hr />
            <ul className='sideStripe list-none pt-2'>

                <li>
                    <NavLink to={"/dashboard"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px]'>
                            <MdDashboard className='text-[16px]' />
                            <span>Dashboard</span>
                        </Button>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/users"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px]'>
                            <FaUserCircle className='text-[16px]' />
                            <span>Users</span>
                        </Button>
                    </NavLink>
                </li>

                {/* Products Section */}
                <li className={isProductActive ? "active" : ""}>
                    <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px]' onClick={() => toggleSubmenu(1)}>
                        <FaProductHunt className='text-[16px]' />
                        <span>Products</span>
                        <span className='ml-auto'>
                            <IoIosArrowDown className={`transition-all ${submenuIndex === 1 || isProductActive ? 'rotate-180' : ''}`} />
                        </span>
                    </Button>

                    <Collapse isOpened={submenuIndex === 1 || isProductActive}>
                        <ul className='pl-7'>
                            <li>
                                <NavLink to={"/product/list"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Product List
                                    </Button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/product/addproduct"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Product Upload
                                    </Button>
                                </NavLink>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                {/* Category Section */}
                <li className={isCategoryActive ? "active" : ""}>
                    <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px]' onClick={() => toggleSubmenu(2)}>
                        <MdCategory className='text-[16px]' />
                        <span>Category</span>
                        <span className='ml-auto'>
                            <IoIosArrowDown className={`transition-all ${submenuIndex === 2 || isCategoryActive ? 'rotate-180' : ''}`} />
                        </span>
                    </Button>

                    <Collapse isOpened={submenuIndex === 2 || isCategoryActive}>
                        <ul className='pl-7'>
                            <li>
                                <NavLink to={"/category/list"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Category List
                                    </Button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/category/addcategory"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Add Category
                                    </Button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/category/subcategorylist"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>SubCategory List
                                    </Button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/category/addsubcategory"} className={({ isActive }) => isActive ? "active" : ""}>
                                    <Button className='w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm'>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Add SubCategory
                                    </Button>
                                </NavLink>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li>
                    <NavLink to={"/order"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none !text-[rgba(0,0,0,0.7)] !text-[16px]'>
                            <HiMiniShoppingBag className='text-[16px]' />
                            <span>Orders</span>
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
