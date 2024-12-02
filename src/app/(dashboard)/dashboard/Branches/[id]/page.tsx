"use client";
import React, { useState } from "react";
import Image from "next/image";
import select from "../../../../../imgs/image (34).png";
import user from "../../../../../imgs/image (22).png";
import Management from "../../../../../imgs/d1fe0874d42913e4c9351017f1c6c707.png";
import photo from "../../../../../imgs/image (32).png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Select, { components } from "react-select";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colorOptions: any = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "black", label: "Black" },
  { value: "silver", label: "Silver" },
  { value: "rose gold", label: "Rose Gold" },
  { value: "green", label: "Green" },
];

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image src={select} alt="Upload Icon" width={20} height={20} />
    </components.DropdownIndicator>
  );
};

export default function BranchDetailPage() {
  const [selectedColors, setSelectedColors] = useState<any>([]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
      borderColor: "#eeeeee",
      padding: "8px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f3b852" : "white",
      color: state.isSelected ? "white" : "black",
      display: "flex",
      alignItems: "center",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f3b852",
      color: "white",
      borderRadius: "4px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: "#f3b852",
        color: "black",
      },
    }),
  };

  const products = [
    {
      id: 3,
      imageUrl: "image_url_3",
      name: "V25 Tablet",
      category: "Electronics",
      subCategory: "Tablets",
      price: 399.0,
      quantity: 85,
      availableColors: ["red", "blue", "green"],
    },
  ];

  return (
    <div className="mt-16 p-4">
   
      <div className="flex flex-col lg:flex-row justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Cairo Branch</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-48">
       
          <div className="relative w-full lg:w-64">
            <Input
              placeholder="Search product name"
              className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-5"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
          </div>

          
          <Dialog>
            <DialogTrigger>
              <div className="w-full lg:w-[136px] h-[40px] bg-[#f3b852] rounded-2xl text-white font-bold flex justify-center items-center">
                + New Branches
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-center mb-10">
                  Add New Branch
                </DialogTitle>
                <DialogDescription>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-5">
                        <label htmlFor="branchName1" className="text-black">
                          Product Name
                        </label>
                        <Input
                          id="branchName1"
                          className="rounded-2xl py-6 mt-2"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="Manager" className="text-black">
                          Category
                        </label>
                        <Input id="Manager" className="rounded-2xl py-6 mt-2" />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="colors" className="text-black">
                          Colors
                        </label>
                        <Select
                          id="colors"
                          isMulti
                          options={colorOptions}
                          styles={customStyles}
                          components={{ DropdownIndicator: CustomDropdownIndicator }}
                          placeholder="Select Colors"
                          onChange={setSelectedColors}
                          value={selectedColors}
                          className="mt-2"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="TotalProducts" className="text-black">
                          Sub-Category
                        </label>
                        <Input
                          id="TotalProducts"
                          className="rounded-2xl py-6 mt-2"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="TotalProducts" className="text-black">
                          Quantity
                        </label>
                        <Input
                          id="TotalProducts"
                          className="rounded-2xl py-6 mt-2"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="TotalProducts" className="text-black">
                          Price
                        </label>
                        <Input
                          id="TotalProducts"
                          className="rounded-2xl py-6 mt-2"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center mb-8">
                      <div className="w-full h-32 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center bg-white shadow-md">
                        <Image
                          src={photo}
                          alt="Upload Icon"
                          width={40}
                          height={40}
                          className="mb-2"
                        />
                        <p className="text-[#FFB800] font-bold">
                          Attach pictures of the product
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 mb-5 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="bg-[#f3b852] text-white py-5 px-16 rounded-lg"
                      >
                        Add Product
                      </Button>
                    </div>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

   
      <div className="w-full mb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg h-auto lg:h-[140px] bg-white p-5 shadow-md w-full"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={user}
                  alt="User Icon"
                  width={40}
                  height={44}
                  className="h-12 w-12"
                />
                <div>
                  <h2 className="text-gray-600 text-md mb-2 mt-2 font-bold">
                    Manager
                  </h2>
                  <p className="font-bold text-xl text-black mb-2">
                    Mohamed Ahmed
                  </p>
                  <h3 className="text-[#f6cd86] text-sm font-semibold cursor-pointer mt-1 relative after:block after:h-[1px] after:bg-[#f6cd86] after:w-[50%]">
                    View Details
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left text-gray-600">ID</th>
              <th className="py-2 px-4 text-left text-gray-600">Image</th>
              <th className="py-2 px-4 text-left text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Category</th>
              <th className="py-2 px-4 text-left text-gray-600">Price</th>
              <th className="py-2 px-4 text-left text-gray-600">Quantity</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4 text-sm text-gray-600">
                  {product.id}
                </td>
                <td className="py-2 px-4">
                  <Image
                    src={Management}
                    alt={product.name}
                    width={40}
                    height={40}
                  />
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  {product.name}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  {product.category}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  ${product.price}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600">
                  {product.quantity}
                </td>
                <td className="py-2 px-4">
                  <button className="bg-[#f3b852] text-white py-1 px-3 rounded-md">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
