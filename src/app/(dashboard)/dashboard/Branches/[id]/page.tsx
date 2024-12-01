"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import select from '../../../../../imgs/image (34).png';
import user from '../../../../../imgs/image (22).png';
import Management from '../../../../../imgs/d1fe0874d42913e4c9351017f1c6c707.png';
import photo from '../../../../../imgs/image (32).png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Select, { components } from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'black', label: 'Black' },
  { value: 'silver', label: 'Silver' },
  { value: 'rose gold', label: 'Rose Gold' },
  { value: 'green', label: 'Green' },
];


const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>

      <Image
                                                src={select}
                                                alt="Upload Icon"
                                                width={20}
                                                height={20}
                                              
                                            />
  
   
    </components.DropdownIndicator> 
  );
};

export default function BranchDetailPage() {
  const [selectedColors, setSelectedColors] = useState([]);

  const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '12px',
        borderColor: '#eeeeee',
        padding: '8px',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f3b852' : 'white',
        color: state.isSelected ? 'white' : 'black',
        display: 'flex',
        alignItems: 'center',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#f3b852',
        color: 'white',
        borderRadius: '4px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: 'white',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: 'white',
        ':hover': {
            backgroundColor: '#f3b852',
            color: 'black',
        },
    }),
  };

  const products = [
    {
      id: 3,
      imageUrl: 'image_url_3', 
      name: 'V25 Tablet',
      category: 'Electronics',
      subCategory: 'Tablets',
      price: 399.00,
      quantity: 85,
      availableColors: ['red', 'blue', 'green'],
    },
   
  ];

  return (
    <div className='mt-16'>
        <div className='flex justify-between mb-8'>
            <div>
                <h1 className="text-2xl font-semibold mb-4">Cairo Branch</h1>
            </div>
            
            <div className='flex gap-48'>
                <div className='relative w-64'>
                    <Input
                        placeholder="Search product name"
                        className='pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-5'
                    />
                    <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]' />
                </div>

                <Dialog>
                    <DialogTrigger>
                        <div className="w-[136px] h-[40px] bg-[#f3b852] rounded-2xl text-white font-bold flex justify-center items-center">
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
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="mb-5">
                                            <label htmlFor="branchName1" className="text-black">Product Name</label>
                                            <Input id="branchName1" className="rounded-2xl py-6 mt-2" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="Manager" className="text-black">Category</label>
                                            <Input id="Manager" className="rounded-2xl py-6 mt-2" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="colors" className="text-black">Colors</label>
                                            <Select
                                                id="colors"
                                                isMulti
                                                options={colorOptions}
                                                styles={customStyles}
                                                components={{ DropdownIndicator: CustomDropdownIndicator }} // إضافة السهم المخصص
                                                placeholder="Select Colors"
                                                onChange={setSelectedColors}
                                                value={selectedColors}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="TotalProducts" className="text-black">Sub-Category</label>
                                            <Input id="TotalProducts" className="rounded-2xl py-6 mt-2" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="TotalProducts" className="text-black">Quantity</label>
                                            <Input id="TotalProducts" className="rounded-2xl py-6 mt-2" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="TotalProducts" className="text-black">Price</label>
                                            <Input id="TotalProducts" className="rounded-2xl py-6 mt-2" />
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
                                            <p className="text-[#FFB800] font-bold">Attach pictures of the product</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-5 flex items-center justify-center">
                                        <Button variant="outline" className="bg-[#f3b852] text-white py-5 px-16 rounded-lg">
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

        <div className='w-full mb-7'>
            <div className='grid grid-cols-3 gap-4 w-full'>
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className='flex flex-col justify-between rounded-lg h-[140px] bg-white p-5 shadow-md w-full'
                    >
                        <div className='flex items-center gap-4'>
                            <Image src={user} alt="User Icon" width={40} height={44} className='h-12 w-12' />
                            <div>
                                <h2 className='text-gray-600 text-md mb-2 mt-2 font-bold'>Manager</h2>
                                <p className='font-bold text-xl text-black mb-2'>Mohamed Ahmed</p>
                                <h3 className='text-[#f6cd86] text-sm font-semibold cursor-pointer mt-1 relative after:block after:h-[1px] after:bg-[#f6cd86] after:w-[50%]'>
                                    View Details
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left text-black font-bold">Image</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Product Name</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Category</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Sub-Category</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Price</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Quantity</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Available Colors</th>
                        <th className="py-2 px-4 text-left text-black font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b">
                            <td className="py-2 px-4">
                                <Image src={Management} alt="Product Image" width={40} height={44} className='h-11 rounded-lg' />
                            </td>
                            <td className="py-2 px-4 text-[#36383a]">{product.name}</td>
                            <td className="py-2 px-4 text-[#36383a]">{product.category}</td>
                            <td className="py-2 px-4 text-[#36383a]">{product.subCategory}</td>
                            <td className="py-2 px-4 text-[#36383a]">${product.price.toFixed(2)}</td>
                            <td className="py-2 px-4 text-[#36383a]">{product.quantity}</td>
                            <td className="py-2 px-4 flex space-x-2">
                                {product.availableColors.map((color, index) => (
                                    <span
                                        key={index}
                                        style={{ backgroundColor: color }}
                                        className="w-4 h-4 rounded-full"
                                    ></span>
                                ))}
                            </td>
                            <td className="py-2 px-4">
                                <div className="w-[94.67px] h-[28px] border-2 border-[#eeeeee] rounded-lg flex items-center justify-center space-x-2">
                                    <button>
                                        <i className="fa-solid fa-pencil text-[#a19f9f]"></i>
                                    </button>
                                    <div className="w-[1px] h-[20px] bg-[#eeeeee]"></div>
                                    <button>
                                        <i className="fa-solid fa-trash-can text-[#a19f9f]"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
