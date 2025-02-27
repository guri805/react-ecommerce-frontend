import React, { useState } from 'react'
import Sidebar from '../../components/AdminComponent/Sidebar'
import { Button } from '@mui/material'
import ProductTable from '../../components/AdminComponent/ProductTable'
import CustomTable from "../../components/AdminComponent/CustomTable";
import { Link } from 'react-router-dom';
import InputDropdown from '../../components/AdminComponent/InputDropdown';
import SearchBox from '../../components/AdminComponent/SearchBox';

// Sample Product Data
const productData = [
    {
        id: "67b38407e067fec9c4d5ed9e",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        name: " doloribus voluptates corporis.",
        category: "Electronics",
        subcategory: "Mobile Phones",
        price: "$699",
    },
    {
        id: "67b38407e067fec9c4d5ed9e",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia adipisci reiciendis, doloribus voluptates corporis.",
        category: "Electronics",
        subcategory: "Computers",
        price: "$999",
    },
];

// Column Structure for Products
const productColumns = [
    { id: "id", label: "ID", align: "left" },
    { id: "product", label: "Product", align: "left" },
    { id: "category", label: "Category", align: "left" },
    { id: "subcategory", label: "Subcategory", align: "left" },
    { id: "price", label: "Price", align: "left" },
    { id: "action", label: "Action", align: "center" },
];


const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleSearch = (query) => {
        console.log("Search Query:", query);
    };
    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="col1 w-full p-5 py-10 shadow-md border-[rgba(0,0,0,0.8)] flex items-center justify-between gap-8 mb-5 capitalize bg-white rounded-md">
                            <div className="">
                                <h1 className='text-[30px] font-bold leading-9 mb-3'>Good Morning,<br />Cameron</h1>
                                <p>Here's what happening on your store today. see the statistics at once.</p>
                                <Link to={"/product/addproduct"}>
                                    <Button className='!bg-[#3872fa] !text-white !font-medium !text-sm !mt-5'> Add Product</Button>
                                </Link>
                            </div>
                            <img src="\E-commerce-App.webp" alt="" className='w-[350px] rounded-lg' />
                        </div>
                        <div className="col2 card my-3 bg-white p-4 rounded-md">
                            <div className='flex items-center justify-between py-2'>
                                <h3 className='text-[20px] font-semibold'>Recent Order</h3>

                            </div>

                            <div class="col1 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Product name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Color
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td class="px-6 py-4">
                                                Silver
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td class="px-6 py-4">
                                                $2999
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td class="px-6 py-4">
                                                White
                                            </td>
                                            <td class="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td class="px-6 py-4">
                                                $1999
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td class="px-6 py-4">
                                                Black
                                            </td>
                                            <td class="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td class="px-6 py-4">
                                                $99
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Google Pixel Phone
                                            </th>
                                            <td class="px-6 py-4">
                                                Gray
                                            </td>
                                            <td class="px-6 py-4">
                                                Phone
                                            </td>
                                            <td class="px-6 py-4">
                                                $799
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple Watch 5
                                            </th>
                                            <td class="px-6 py-4">
                                                Red
                                            </td>
                                            <td class="px-6 py-4">
                                                Wearables
                                            </td>
                                            <td class="px-6 py-4">
                                                $999
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="col4 bg-white p-4 rounded-md">
                            <h2 className='text-xl font-semibold pb-3'>Product List</h2>
                            <div className="col1 bg-white flex items-center justify-between py-2">
                                <div className="w-[200px] max-w-[200px] overflow-hidden">
                                    <InputDropdown
                                        label="Category By"
                                        options={["Electronics", "Clothing", "Books", "Furniture"]}
                                        selected={selectedOption}
                                        onChange={setSelectedOption}
                                        className="px-6 py-1 w-full"
                                    />
                                </div>
                                <div className="w-[260px] flex justify-center">
                                    <SearchBox placeholder="Search products..." onSearch={handleSearch} />
                                </div>
                            </div>
                            <div className="col2 shadow-md">
                                <CustomTable columns={productColumns} rows={productData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
