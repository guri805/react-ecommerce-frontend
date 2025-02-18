import React, { useState } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const CategoryCollapse = () => {
    const [openSubMenu, setOpenSubMenu] = useState({});
    const [openInnerSubMenu, setOpenInnerSubMenu] = useState({});

    const handleOpenSubMenu = (category) => {
        setOpenSubMenu((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleOpenInnerSubMenu = (category) => {
        setOpenInnerSubMenu((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };
    return (
        <>
            <div className="scroll">
                <ul className='w-full'>
                    {['Fashion', 'Electronics'].map((category) => (
                        <li key={category} className='list-none flex items-center flex-col relative'>
                            <Link className='w-full'>
                                <Button className='w-full !link !text-left !justify-start !px-3 !text-[16px] !text-[rgba(0,0,0,0.8)]'>
                                    {category}
                                </Button>
                            </Link>
                            <BsPlusSquare
                                className='absolute top-[10px] right-3'
                                onClick={() => handleOpenSubMenu(category)}
                            />
                            {openSubMenu[category] && (
                                <ul className='submenu w-full pl-3'>
                                    <li className='list-none relative'>
                                        <Link className='w-full'>
                                            <Button className='w-full !link !text-left !justify-start !px-3 !text-[14px] !text-[rgba(0,0,0,0.8)]'>
                                                Subcategory
                                            </Button>
                                        </Link>
                                        <BsPlusSquare
                                            className='absolute top-[10px] right-3 !w-3'
                                            onClick={() => handleOpenInnerSubMenu(category)}
                                        />
                                        {openInnerSubMenu[category] && (
                                            <ul className='inner-submenu w-full pl-3 mb-2'>
                                                <li className='list-none relative mb-2'>
                                                    <Link
                                                        to={'/'}
                                                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'
                                                    >
                                                        Inner Subcategory
                                                    </Link>
                                                </li>
                                                {/* Add more submenu items here */}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse
