"use client";

import React, { useState } from "react"; 
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Image from "next/image";
import date from '../../../../imgs/image (31).png';

// تسجيل وحدات Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const doughnutData = {
  labels: ["Shipped", "Processing", "Cancelled"],
  datasets: [
    {
      data: [55, 35, 10],
      backgroundColor: ["#A3D6C1", "#F9DCA8", "#FFB8C6"],
      hoverBackgroundColor: ["#8FCBB0", "#EAC694", "#F8A6B8"],
    },
  ],
};

const lineData = {
  labels: ["May", "June", "July", "August", "September", "November"],
  datasets: [
    {
      label: "Revenue",
      data: [4000, 4500, 5000, 4200, 4800, 4500],
      fill: true,
      backgroundColor: "rgba(249, 220, 168, 0.5)",
      borderColor: "#F9DCA8",
      tension: 0.4,
    },
  ],
};

const barData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Revenues",
      data: [15, 10, 25, 20, 18, 22, 17],
      backgroundColor: "#F9DCA8",
    },
    {
      label: "Expenses",
      data: [12, 8, 20, 15, 14, 18, 12],
      backgroundColor: "#D3D3D3",
    },
  ],
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options:any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const products = [
  { id: 1, name: "V23 Laptop", company: "Hardware Co.", sold: 1817, image: date },
  { id: 2, name: "X10 Tablet", company: "Tech Corp.", sold: 1342, image: date },
  { id: 3, name: "G55 Smartphone", company: "Smart Inc.", sold: 2451, image: date },
];

function Reports() {
  const [calendarOpen, setCalendarOpen] = useState(false); 

  

  return (
    <div>
      <div className="flex justify-around mb-8">
        <h1 className="text-2xl font-semibold">Reports Dashboard</h1>
        <div className="flex">
          <div className="relative w-64">
            <Input
              placeholder="Search product name"
              className="pl-10 border-[#eeeeee] bg-white border-2 rounded-full focus:outline-none py-5"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#888888]" />
          </div>

          <Image
            width={60}
            height={30}
            className="rounded cursor-pointer"
            src={date}
            alt="Date"
            onClick={() => setCalendarOpen(!calendarOpen)} 
          />

          
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4 bg-gray-100 min-h-screen">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-[350px]">
                <Doughnut data={doughnutData} options={options} />
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-[350px]">
                <Line data={lineData} options={options} />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 h-[300px]">
              <Bar data={barData} options={options} />
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-medium mb-4">Top Selling Products</h2>
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between mb-4 last:mb-0">
                <div className="flex items-center gap-2">
                  <Image width={40} height={30} className="rounded" src={product.image} alt={product.name} />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.company}</p>
                  </div>
                </div>
                <p className="text-yellow-600 font-medium">{product.sold} Sold</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
