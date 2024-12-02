import React from 'react';
import Image from 'next/image';
import user from '../../../imgs/image (22).png';
import rate from '../../../imgs/image (30).png';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AreaChart from "@/components/AreaChart"

export default function Page() {
  return (
    <div className='space-y-6  w-full '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[...Array(4)].map((_, index) => (
          <div key={index} className='flex items-center gap-5 rounded-lg h-[80px] bg-white p-4 shadow-md'>
            <Image src={user} alt="User Icon" width={40} height={44} className='h-11' />
            <div>
              <h2 className='mb-1 text-gray-500 text-sm'>Total Users</h2>
              <h2 className='font-bold text-lg'>33,615</h2>
            </div>
            <div className='flex items-center gap-2 ml-auto'>
              <Image src={rate} alt="Rate Icon" width={20} height={20} className='h-5 w-5' />
              <span className='text-[#14D433] font-bold'>7.3%</span>
            </div>
          </div>
        ))}
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4' >
        <Card className='bg-white rounded-lg shadow-lg'>
          <CardHeader>
            <CardTitle className='font-bold text-xl'>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <table className='w-full text-left'>
              <thead className='bg-[#f3f4f6]'>
                <tr className='border-b border-gray-200'>
                  <th className='px-4 py-2 text-gray-600'>Products Quantity</th>
                  <th className='px-4 py-2 text-gray-600'>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <td className='px-4 py-2'>570</td>
                  <td className='px-4 py-2'>
                    <span className='px-2 py-1 bg-[#92fba2] text-green-700 rounded-full'>Delivered</span>
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='px-4 py-2'>623</td>
                  <td className='px-4 py-2'>
                    <span className='px-2 py-1 bg-[#feeec8] text-yellow-700 rounded-full'>Pending</span>
                  </td>
                </tr>
                <tr>
                  <td className='px-4 py-2'>875</td>
                  <td className='px-4 py-2'>
                    <span className='px-2 py-1 bg-[#ffaeb0] text-red-700 rounded-full'>Rejected</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className=' bg-white rounded-lg shadow-lg p-4'>
  <CardHeader>
    <CardTitle className='font-bold text-xl'>Overview</CardTitle>
  </CardHeader>
  <CardContent className='space-y-4'>
    {[{ title: 'Total Vendors', value: 3718, change: '7.3%', positive: true },
      { title: 'Product Categories', value: 1427, change: '7.3%', positive: true },
      { title: 'Trademarks', value: 9189, change: '7.3%', positive: false }].map((item, index) => (
      <div key={index} className='flex justify-between items-center'>
        <div className='flex  gap-7 '>
          <h2 className='text-gray-600'>{item.title}</h2>
          <h2 className='font-bold text-lg'>{item.value}</h2>
        </div>
        <div className='flex items-center gap-2'>
         
          <span className={`font-bold ${item.positive ? 'text-[#14D433]' : 'text-red-700'}`}>
            {item.change}
          </span>
        </div>
      </div>
    ))}
  </CardContent>
</Card>

      </div>
      <AreaChart></AreaChart>
    </div>
  );
}
