import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../FormComponent/inputComponent';
import Btn from '../Comman/btn';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";
import { Badge, Button, Tooltip, Menu, MenuItem } from '@mui/material';
import Navigation from './Navigation';
import { AppContext } from '../../App';
import { MdLogout } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";


const Header = () => {
  const { isLogin } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <header className="bg-white">
        {/* Top stripe */}
        <div className="top-strip py-1 border-y border-gray-300 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="col-one w-[50%]">
                <p className="text-[14px] font-medium text-gray-700">
                  Get up to <span className="text-primary font-semibold">50% off</span> new season styles, limited time only
                </p>
              </div>
              <div className="col-two text-[13px]">
                <ul className="flex items-center gap-4 font-medium text-gray-600">
                  <li>
                    <Link className="link transition hover:text-primary border-r border-gray-400 pr-2" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="link transition hover:text-primary border-r border-gray-400 pr-2" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="link transition hover:text-primary" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="header border-b border-gray-300 bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between py-4">
            <div className="col-one w-[20%]">
              <Link to="/">
                <img src="/logo.png" alt="Logo" width={120} className="ms-6" />
              </Link>
            </div>

            <div className="col-two w-[50%]">
              <div className="w-full flex items-center">
                <InputComponent
                  type="text"
                  placeholder="Search for products..."
                  inputClassName="w-full focus:outline-none py-2 px-4 border border-gray-300 rounded-lg text-[14px] font-medium text-gray-700 focus:ring-2 focus:ring-primary"
                />
                <Btn
                  type="submit"
                  btnName="Search"
                  btnClassName="ml-3 bg-primary text-white py-[10px] px-4 rounded-lg text-[13px] font-medium hover:bg-primary-dark transition"
                />
              </div>
            </div>

            <div className="col-three w-[40%] flex justify-center items-center">
              {isLogin ? (
                <>
                  <button
                    className="!text-black flex items-center justify-end gap-2 w-[200px] max-w-[250px] overflow-hidden"
                    onClick={handleClick}
                  >
                    <div className="!text-black !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] flex items-center justify-center">
                      <FaRegUser className="text-[18px]" />
                    </div>
                    <div className="text-sm leading-4">
                      <p className="text-start max-w-[150px] truncate !capitalize">Gursangam</p>
                      <p className="text-[12px] max-w-[150px] truncate !lowercase">gursangamsingh2@gmail.com</p>
                    </div>
                  </button>

                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    id="demo-customized-menu"
                    onClose={handleClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    className='mt-1 w-[300px]'
                  >
                    <Link to={"/myaccount"}>
                    <MenuItem onClick={handleClose}>
                      <FaRegUser className="mr-2 text-[16px]" /> My Account
                    </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                      <IoBagCheckOutline className="mr-2 text-[20px]" /> Order
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MdLogout className="mr-2 text-[16px]" /> Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <p className="mr-3 text-[16px] font-medium text-gray-700">
                  <Link className="link hover:text-primary" to="/login">
                    Login
                  </Link>
                  /
                  <Link className="link hover:text-primary" to="/signup">
                    Signup
                  </Link>
                </p>
              )}

              <div className="w-[1px] h-10 bg-gray-300 mx-4"></div>

              <div className="flex items-center space-x-4">
                <Tooltip title="Compare" arrow>
                  <Badge
                    badgeContent={4}
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#ff5252',
                        color: 'white',
                      },
                    }}
                  >
                    <LuGitCompareArrows className="text-gray-600 hover:text-primary w-6 h-6 cursor-pointer transition" />
                  </Badge>
                </Tooltip>

                <Tooltip title="Wishlist" arrow>
                  <Badge
                    badgeContent={4}
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#ff5252',
                        color: 'white',
                      },
                    }}
                  >
                    <FaRegHeart className="text-gray-600 hover:text-primary w-6 h-6 cursor-pointer transition" />
                  </Badge>
                </Tooltip>

                <Tooltip title="Add to Cart" arrow>
                  <Badge
                    badgeContent={2}
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: '#ff5252',
                        color: 'white',
                      },
                    }}
                  >
                    <Link to="/cart">
                      <MdOutlineShoppingCart className="text-gray-600 hover:text-primary w-6 h-7 cursor-pointer transition" />
                    </Link>
                  </Badge>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
