import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../FormComponent/inputComponent';
import Btn from '../Comman/btn';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from '@mui/material';

const Header = () => {
  return (
    <div>
      <header>
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
            <div className="col-one w-[25%]">
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

            <div className="col-three w-[35%] flex justify-center items-center">
              <div>
                <p className="mr-3 text-[16px] font-medium text-gray-700 ">
                  <Link className="link hover:text-primary" to="/login">
                    Login
                  </Link>
                  /
                  <Link className="link hover:text-primary" to="/signup">
                    Signup
                  </Link>
                </p>
              </div>
              <div className="w-[1px] h-10 bg-gray-300 mx-4"></div>
              <div className="flex items-center space-x-4">
                <Badge badgeContent={4} sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#ff5252',
                    color: 'white',
                  },
                }}>
                  <FaRegHeart className="text-gray-600 hover:text-primary w-6 h-6 cursor-pointer transition" />
                </Badge>

                <Badge badgeContent={2} sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#ff5252',
                    color: 'white',
                  },
                }}>
                  <MdOutlineShoppingCart className="text-gray-600 hover:text-primary w-6 h-6 cursor-pointer transition" />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
