import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import Management from '../../../../imgs/d1fe0874d42913e4c9351017f1c6c707.png';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const products = [
  {
    id: 1,
    imageUrl: 'image_url_1',
    name: 'V23 Laptop',
    category: 'Electronics',
    subCategory: 'Laptops',
    price: 690.0,
    quantity: 63,
    availableColors: ['red', 'blue', 'green'],
  },
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  
  {
    id: 2,
    imageUrl: 'image_url_2',
    name: 'V24 Phone',
    category: 'Electronics',
    subCategory: 'Mobile Phones',
    price: 499.99,
    quantity: 120,
    availableColors: ['red', 'blue', 'green'],
  },
  
];

export default function ProductsInventory() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
       
      <div className="flex justify-between mb-8">
          <h1 className="text-2xl font-semibold">Branches</h1>
          <div className="flex gap-8">
            <div className="relative w-64">
              <Input
                placeholder="Search product name"
                className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-5"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
            </div>
            <Dialog>
              <DialogTrigger>
                <div className="w-[136px] h-[40px] bg-[#f3b852] rounded-2xl text-white font-bold flex justify-center items-center">
                  + New Branches
                </div>
              </DialogTrigger>
              <DialogContent className=''>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-center mb-10">Add New Branch</DialogTitle>
                  <DialogDescription>
                    <form>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="mb-5">
                          <label htmlFor="branchName1" className="text-black">Branch Name</label>
                          <Input id="branchName1" className="rounded-2xl py-6 mt-2" />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="Manager" className="text-black">Manager</label>
                          <Input id="Manager" className="rounded-2xl py-6 mt-2" />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="EmployeeNo" className="text-black">Employee No.</label>
                          <Input id="EmployeeNo" className="rounded-2xl py-6 mt-2" />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="TotalProducts" className="text-black">Total Products</label>
                          <Input id="TotalProducts" className="rounded-2xl py-6 mt-2" />
                        </div>
                      </div>
                      <div className="mb-9">
                        <label htmlFor="Location" className="text-black">Location</label>
                        <Input id="Location" className="rounded-2xl py-6 mt-2" />
                      </div>
                      <div className="mt-4 mb-5 flex items-center justify-center">
                        <Button variant="outline" className="bg-[#f3b852] text-white py-5 px-16 rounded-lg">
                          Add Branch
                        </Button>
                      </div>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="border-b bg-gray-100">
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
                    <Image
                      src={Management}
                      alt="User Icon"
                      width={40}
                      height={44}
                      className="h-11 rounded-lg"
                    />
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

                      <div className="w-px h-5 bg-[#eeeeee]"></div>

                      <button>
                        <i className="fa-solid fa-star text-[#f3b852]"></i>
                      </button>

                      <div className="w-px h-5 bg-[#eeeeee]"></div>

                      <button>
                        <i className="fa-solid fa-trash text-[#e13e3e]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}