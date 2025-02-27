import React, { useState } from 'react'
import MyAccountLeftSideBar from '../../components/Comman/MyAccountLeftSideBar'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Button } from '@mui/material';
import Badge from '../../components/Comman/Badge';

const Order = () => {
    const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);
    const isShowOrderProduct = (index) => {
        if (isOpenOrderedProduct === index) {
            setIsOpenOrderedProduct(null)
        }
        else {
            setIsOpenOrderedProduct(index);
        }
    }
    return (
        <section className="cart-page py-5">
            <div className="container flex gap-5 ">
                <div className="leftPart w-1/4">
                    <MyAccountLeftSideBar />
                </div>
                <div className="rightPart w-3/4">
                    <div className="card shadow-md rounded-md bg-white p-3">
                        <div className="cartHeader p-3 border-b-2">
                            <h2 className='font-medium'>My Order</h2>
                            <p className='capitalize'>There are <span className='font-bold text-primary'>2</span> products in your my order</p>
                            <div className="productDetailSection relative overflow-x-auto mt-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Preview  Product
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Payment Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Pincode
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                User Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <td className="px-6 py-4">
                                                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !leading-none !rounded-full !bg-[#f1f1f1] !flex !justify-center !items-center' onClick={() => isShowOrderProduct(0)}>
                                                    {isOpenOrderedProduct === 0 ? <IoIosArrowUp className='!text-[22px] !text-center text-[rgba(0,0,0,0.7)]' /> : <IoIosArrowDown className='!text-[22px] !text-center text-[rgba(0,0,0,0.7)]' />}</Button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className='text-primary'>jjkht4jk24k5634jk5k334jk34j</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className='text-primary'>jjkht4jk24k5634jk5k334jk34j</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Gursangam singh
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <span className='block w-[200px]'>Hno:222 , sector 111 , mohali, sas nagar, </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge status="confirm" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                        </tr>
                                        {
                                            isOpenOrderedProduct === 0 &&
                                            <tr>
                                                <td className='pl-10' colSpan={4}>
                                                    <div className="productDetailSection relative overflow-x-auto">
                                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Title
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Image
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Price
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Subtotal
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <span className='text-primary'>fdjsklfsk32434k5k5</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        A-Line kurti with shardidda
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='rounded-md w-[60px] h-[60px] object-contain' />
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <span className='text-primary'>fdjsklfsk32434k5k5</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        A-Line kurti with shardidda
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='rounded-md w-[60px] h-[60px] object-contain' />
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>

                                        }


                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <td className="px-6 py-4">
                                                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !leading-none !rounded-full !bg-[#f1f1f1] !flex !justify-center !items-center' onClick={() => isShowOrderProduct(1)}>
                                                    {isOpenOrderedProduct === 1 ? <IoIosArrowUp className='!text-[22px] !text-center text-[rgba(0,0,0,0.7)]' /> : <IoIosArrowDown className='!text-[22px] !text-center text-[rgba(0,0,0,0.7)]' />}</Button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className='text-primary'>jjkht4jk24k5634jk5k334jk34j</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className='text-primary'>jjkht4jk24k5634jk5k334jk34j</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Gursangam singh
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <span className='block w-[200px]'>Hno:222 , sector 111 , mohali, sas nagar, </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Badge status="confirm" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                Laptop
                                            </td>
                                        </tr>
                                        {
                                            isOpenOrderedProduct === 1 &&
                                            <tr>
                                                <td className='pl-10' colSpan={4}>
                                                    <div className="productDetailSection relative overflow-x-auto">
                                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Title
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Image
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Price
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Subtotal
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <span className='text-primary'>fdjsklfsk32434k5k5</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        A-Line kurti with shardidda
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='rounded-md w-[60px] h-[60px] object-contain' />
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <span className='text-primary'>fdjsklfsk32434k5k5</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        A-Line kurti with shardidda
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='rounded-md w-[60px] h-[60px] object-contain' />
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        1300
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Order
