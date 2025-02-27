import React, { useState } from 'react';
import Sidebar from '../../components/AdminComponent/Sidebar';

const AddSubCategory = () => {
    const [formData, setFormData] = useState({
        categoryname: "",
        subcategoryname: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <section className="AddSubCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <h1 className="text-2xl font-semibold my-3">Add Category</h1>

                            {/* Form */}
                            <form className='flex flex-col gap-2'>
                                {/* Product Name Input */}
                                <div className="">
                                    <label className="block font-medium">Category Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        value={formData.categoryname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label className="block font-medium">SubCategory Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        value={formData.subcategoryname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <button type="submit" className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                                    Add SubCategory
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddSubCategory;
