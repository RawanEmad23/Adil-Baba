"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import date from "../../../../imgs/image (31).png";
import Link from 'next/link';
const products = [
  {
    id: 1,
    ordernom: 25182,
    date: "31 July 2024",
    clientName: "Mohamed Ahmed",
    price: 300.0,
    status: "Cancelled",
  },
  {
    id: 2,
    ordernom: 28197,
    date: "31 July 2024",
    clientName: "Ahmed Yasser",
    price: 300.0,
    status: "Completed",
  },
  {
    id: 3,
    ordernom: 17922,
    date: "31 July 2024",
    clientName: "Omar Ehab",
    price: 300.0,
    status: "Processing",
  },
];

export default function Orders() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleImageClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
     
      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
  <h1 className="text-2xl font-semibold">Orders</h1>

  <div className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto">
    <div className="relative w-full sm:w-[140px] lg:w-64">
      <Input
        placeholder="Search product name"
        className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-3"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
    </div>
    <Link href='/dashboard/Management/add'>
              <button className="w-full sm:w-[136px] h-[40px] bg-[#f3b852] rounded-2xl text-white font-bold flex justify-center items-center">
                + New Order
              </button>
            </Link>

  </div>
</div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 text-center">
            <thead>
              <tr className="border-b bg-gray-100">
                <th
                  colSpan={3}
                  className="py-4 text-orange-500 font-semibold relative"
                >
                  Company Orders
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />
                </th>
                <th colSpan={3} className="py-4 text-gray-500 font-semibold">
                  Vendor’s Orders
                </th>
              </tr>
              <tr className="border-b bg-gray-50">
                <th className="py-2 px-4 font-bold text-gray-700">Order No.</th>
                <th className="py-2 px-4 font-bold text-gray-700">Date</th>
                <th className="py-2 px-4 font-bold text-gray-700">Client Name</th>
                <th className="py-2 px-4 font-bold text-gray-700">Total Amount</th>
                <th className="py-2 px-4 font-bold text-gray-700">Status</th>
                <th className="py-2 px-4 font-bold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">{product.ordernom}</td>
                  <td className="py-4 px-4">{product.date}</td>
                  <td className="py-4 px-4">{product.clientName}</td>
                  <td className="py-4 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                        product.status === "Cancelled"
                          ? "bg-red-400"
                          : product.status === "Completed"
                          ? "bg-green-400"
                          : "bg-yellow-300"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                        <i className="fa-solid fa-download text-gray-600"></i>
                      </button>
                      <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                        <i className="fa-solid fa-eye text-gray-800"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

       
          <div className="flex justify-between items-center py-4 px-6 bg-gray-50">
            <span className="text-gray-600">Showing 10 from 46 data</span>
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="px-3 py-1 border rounded-full hover:bg-orange-400 hover:text-white transition"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
