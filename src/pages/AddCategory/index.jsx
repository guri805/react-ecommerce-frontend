import React, { useState } from 'react';
import Sidebar from '../../components/AdminComponent/Sidebar';
import ImageUploadbox from '../../components/AdminComponent/ImageUploadbox';

const AddCategory = () => {
    const [formData, setFormData] = useState({
        categoryname: "",
    });

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (uploadedImages) => {
        setImages(uploadedImages);
    };

    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <h1 className="text-2xl my-3">Add Category</h1>

                            {/* Form */}
                            <form>
                                {/* Product Name Input */}
                                <div className="mb-4">
                                    <label className="block font-semibold">Category Name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        value={formData.categoryname}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>

                                {/* Media Upload */}
                                <div className="mb-2">
                                    <h3 className="text-lg font-semibold">Media & Images</h3>
                                    <ImageUploadbox multiple={true} onImagesChange={handleImageUpload} />
                                </div>

                                <button type="submit" className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                                    Add Category
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCategory;
