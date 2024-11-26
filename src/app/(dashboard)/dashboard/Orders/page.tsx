"use client";

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import date from '../../../../imgs/image (31).png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const products = [
  {
    id: 1,
    ordernom: 25182,
    date: '31 July 2024',
    clientName: 'Mohamed Ahmed',
    price: 300.0,
    status: 'Cancelled',
  },
  {
    id: 2,
    ordernom: 28197,
    date: '31 July 2024',
    clientName: 'Ahmed Yasser',
    price: 300.0,
    status: 'Completed',
  },
  {
    id: 3,
    ordernom: 17922,
    date: '31 July 2024',
    clientName: 'Omar Ehab',
    price: 300.0,
    status: 'Processing',
  },
];

export default function Orders() {
  // حالة لعرض التقويم
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleImageClick = () => {
    setShowCalendar(!showCalendar); 
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-center">Orders</h1>
          </div>
          <div className="flex gap-48">
            <div className="relative w-64">
              <Input
                placeholder="Search product name"
                className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-5"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
            </div>
            <div className="flex items-center space-x-2 relative">
              <div
                className="cursor-pointer"
                onClick={handleImageClick}
              >
                <Image src={date} alt="calendar icon" width={70} height={20} />
              </div>

              {showCalendar && (
                <div className="absolute top-10 right-[20px] mt-2 z-10">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    calendarClassName="bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2"
                    dayClassName={(date) =>
                      date.getDate() === startDate.getDate()
                        ? 'bg-orange-500 text-white'
                        : 'text-black'
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className=" flex text-center">
              <tr className="border-b">
                <th
                  colSpan="3"
                  className="text-[#f3b852] font-medium py-2 relative text-center"
                >
                  Company Orders
                  <span
                    className="absolute bottom-1 left-0 w-full h-[2px] bg-[#f3b852]"
                    style={{ transform: 'translateY(4px)' }}
                  />
                </th>
                <th colSpan="3" className="text-[#bababa] font-medium py-2 text-center">
                  Vendor’s Orders
                </th>
              </tr>
              <tr className="border-b">
                <th className="py-2 px-4 text-center text-black font-bold">Order No.</th>
                <th className="py-2 px-4 text-center text-black font-bold">Date</th>
                <th className="py-2 px-4 text-center text-black font-bold">Client Name</th>
                <th className="py-2 px-4 text-center text-black font-bold">Total Amount</th>
                <th className="py-2 px-4 text-center text-black font-bold">Status</th>
                <th className="py-2 px-4 text-center text-black font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="font-thin text-center">
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2 px-4">{product.ordernom}</td>
                  <td className="py-2 px-4">{product.date}</td>
                  <td className="py-2 px-4">{product.clientName}</td>
                  <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-2 rounded-lg font-semibold text-white ${
                        product.status === 'Cancelled'
                          ? 'bg-[#ffaeb0]'
                          : product.status === 'Completed'
                          ? 'bg-[#92fba2]'
                          : 'bg-[#feeec8]'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="w-[94.67px] h-[28px] border-2 border-[#eeeeee] rounded-lg flex items-center justify-center space-x-2">
                      <button>
                        <i className="fa-solid fa-download text-[#9a9898]"></i>
                      </button>
                      <div className="w-px h-5 bg-[#9a9898]"></div>
                      <button>
                        <i className="fa-solid fa-eye text-[#292d32]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center py-4 px-6">
            <span>Showing 10 from 46 data</span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded-lg">1</button>
              <button className="px-3 py-1 border rounded-lg">2</button>
              <button className="px-3 py-1 border rounded-lg">3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
