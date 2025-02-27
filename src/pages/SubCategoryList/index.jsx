import React, { useState } from 'react';
import Sidebar from '../../components/AdminComponent/Sidebar';
import { Button } from '@mui/material';
import InputDropdown from '../../components/AdminComponent/InputDropdown';
import SearchBox from '../../components/AdminComponent/SearchBox';
import { Link } from 'react-router-dom';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from '@mui/material/Chip';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const columns = [
    { id: "categoryimage", label: "CATEGORY IMAGE", minWidth: 150 },
    { id: "categoryname", label: "CATEGORY NAME", minWidth: 150 },
    { id: "subcategoryname", label: "SUB CATEGORY NAME", minWidth: 150 },
    { id: "action", label: "ACTION", minWidth: 150 },
];

const rows = [
    {
        id: 1,
        categoryimage: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        categoryname: "Fashion",
        subcategories: ["Men", "Women", "Kids"],
    },
    {
        id: 2,
        categoryimage: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        categoryname: "Electronics",
        subcategories: ["Mobiles", "Laptops", "Accessories"],
    }
];

const SubCategoryList = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSearch = (query) => {
        console.log("Search Query:", query);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <section className="AddSubCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            {/* Header Section */}
                            <div className="col1 flex justify-between items-center">
                                <h1 className='font-semibold text-2xl text-gray-800'>Products</h1>
                                <div className="buttons flex gap-2">
                                    <Button className='!bg-green-600 !text-white !font-medium !text-[12px] max-h-8'>Export</Button>
                                    <Link to={"/category/addsubcategory"}>
                                        <Button className='!bg-[#3872fa] !text-white !font-medium !text-[12px] max-h-8'>
                                            Add Product
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Filter Section */}
                            <div className="col2 bg-white flex items-center justify-between my-4">
                                <div className="w-[200px]">
                                    <InputDropdown
                                        label="Category By"
                                        options={["Electronics", "Clothing", "Books", "Furniture"]}
                                        selected={selectedOption}
                                        onChange={setSelectedOption}
                                        className={"px-6 py-1 w-full"}
                                    />
                                </div>
                                <div className="w-[260px] flex justify-center">
                                    <SearchBox placeholder="Search products..." onSearch={handleSearch} />
                                </div>
                            </div>

                            {/* Table Section */}
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="subcategory table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align="left"
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                            <TableRow hover key={row.id}>
                                                <TableCell>
                                                    <img src={row.categoryimage} alt={row.categoryname} className="w-[50px] h-[50px] object-cover rounded-md" />
                                                </TableCell>
                                                <TableCell>
                                                    <Chip label={row.categoryname} />
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        {row.subcategories.map((sub, index) => (
                                                            <Chip key={index} label={sub} color='primary' />
                                                        ))}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center  gap-2">
                                                        <button className="text-blue-500 hover:text-blue-700">
                                                            <FaEye size={18} />
                                                        </button>
                                                        <button className="text-yellow-500 hover:text-yellow-700">
                                                            <FaEdit size={18} />
                                                        </button>
                                                        <button className="text-red-500 hover:text-red-700">
                                                            <FaTrash size={18} />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            {/* Pagination */}
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubCategoryList;
