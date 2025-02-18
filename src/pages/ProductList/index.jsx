import React, { useState } from 'react'
import SidebarSection from '../../components/Sidebar/SidebarSection'
import ProductItem from '../../components/Comman/ProductItem'
import { IoMenu, IoGrid } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import ProductListView from '../../components/Comman/ProductListView';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const ProductList = () => {
    const [view, setView] = useState('grid')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <section className='sidebarsection bg-white py-3'>
                <div className="container flex">
                    <div className="sidebar max-w-[20%]">
                        <SidebarSection />
                    </div>
                    <div className="rightsection w-screen">
                        <div className="gridbtn p-2 bg-slate-300 rounded-lg mx-2 flex items-center  gap-3">
                            <div className="sortbtn flex items-center ">
                                <button className={`ms-2 !w-[30x] h-[30px] !min-w-[30px] !rounded-full ${view === 'list' && 'actice'}`}>
                                    <IoMenu className='text-lg text-[rgba(0,0,0,0.7)] w-full' onClick={() => setView('list')} />
                                </button>
                                <button className={`ms-2 !w-[30x] h-[30px] !min-w-[30px] !rounded-full ${view === 'grid' && 'actice'}`}>
                                    <IoGrid className='text-lg text-[rgba(0,0,0,0.7)]' onClick={() => setView('grid')} />
                                </button>
                                <span className='text-sm ms-3 text-[rgba(0,0,0,0.7)]'>There are 27 product</span>
                            </div>
                            <div className="sortby ms-auto pr-8">
                                <span className='text-sm text-[rgba(0,0,0,0.7)]'>Sort By: </span>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className="!border !border-black !bg-white opacity-70 !text-black !w-[100px]"
                                >
                                    Select
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    className='!w-[200px] '
                                >
                                    <MenuItem onClick={handleClose} className='!text-sm'>Relevance</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-sm'>Sales, highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-sm'>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-sm'>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-sm'>Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-sm'>Price, high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className={`productlist w-[100%] relative ${view === 'grid' ? 'gap-5 px-5 pt-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1' : 'gap-3 px-5 pt-3 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'} `}>
                            {
                                view === 'grid'
                                    ?
                                    <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </>
                                    :
                                    <>
                                        <ProductListView />
                                        <ProductListView />
                                        <ProductListView />
                                        <ProductListView />
                                        <ProductListView />
                                        <ProductListView />
                                        <ProductListView />
                                    </>
                            }

                        </div>
                        <div className="pagination mt-4 flex justify-center">
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductList
