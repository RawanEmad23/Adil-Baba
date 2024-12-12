"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../imgs/image (14).png";
import notificationIcon from "../../../imgs/image (16).png";
import Products from "../../../imgs/image (18).png";
import orders from "../../../imgs/image (19).png";
import Branches from "../../../imgs/image (21).png";
import Management from "../../../imgs/image (23).png";
import Reports from "../../../imgs/image (25).png";
import Advertisements from "../../../imgs/image (27).png";
import Communication from "../../../imgs/image (28).png";
import Shipping from "../../../imgs/image (29).png";
import Dashboard from "../../../imgs/image (20).png";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCommunicationOpen, setCommunicationOpen] = useState(false); // Added state for communication dropdown

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarProvider>
      <header className="w-full fixed top-0 left-0 bg-white z-30 flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={140} height={40} />
        </div>

        <div className="relative md:w-64 z-40">
          <Input
            placeholder="Search..."
            className="pl-10 border-[#f8d292] border-2 rounded-md focus:outline-none"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="flex items-center md:gap-6">
          <Image src={notificationIcon} alt="Notification" width={30} height={30} />
          <div className="flex items-center">
            <div className="w-7 h-7 bg-slate-600 rounded-full"></div>
            <h2 className="ml-2 hidden md:block">Rawan</h2>
          </div>
        </div>
      </header>

      <div className="flex w-full h-screen pt-16 bg-gray-100">
        {!isSidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-20 left-4 z-20 p-2 bg-gray-100 rounded-full shadow-md"
          >
            <AiOutlineMenu size={24} />
          </button>
        )}

        {isSidebarOpen && (
          <aside className="w-64 h-full bg-white fixed top-16 left-0 flex flex-col p-4 z-30 shadow-lg space-y-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end mb-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              aria-label="Close Sidebar"
            >
              <AiOutlineClose size={20} />
            </button>

            <div
              className={`flex items-center h-10 space-x-2 bg-[#feeec8] mb-5 px-4 py-2 rounded-md ${
                activeTab === "dashboard" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <Image src={Dashboard} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard">
                <button className="text-[#ebb24f]">Dashboard</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "products" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("products")}
            >
              <Image src={Products} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/productsinventory">
                <button className="text-left">Products Inventory</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "orders" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <Image src={orders} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Orders">
                <button className="text-left">Orders</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "branches" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("branches")}
            >
              <Image src={Branches} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Branches">
                <button className="text-left">Branches</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "management" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("management")}
            >
              <Image src={Management} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Management">
                <button className="text-left">Management</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "reports" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("reports")}
            >
              <Image src={Reports} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Reborts">
                <button className="text-left">Reports</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "advertisements" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("advertisements")}
            >
              <Image src={Advertisements} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Advertisments">
                <button className="text-left">Advertisements</button>
              </Link>
            </div>

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "communication" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => {
                setActiveTab("communication");
                setCommunicationOpen(!isCommunicationOpen); // Toggle the communication dropdown
              }}
            >
              <Image src={Communication} alt="Logo" className="w-6 h-6" />
              
                <button className="text-left">Communication</button>
          
            </div>

            {/* Conditionally render Chat and Email */}
            {isCommunicationOpen && (
              <div className="pl-8">
                  <Link href="/dashboard/Communication/Email">
                  <div className="text-left">Email</div>
              </Link>
                <div className="text-left">Chat</div>
            
              </div>
            )}

            <div
              className={`flex items-center pb-5 space-x-2 ${
                activeTab === "shipping" ? "text-orange-500 font-bold" : ""
              }`}
              onClick={() => setActiveTab("shipping")}
            >
              <Image src={Shipping} alt="Logo" className="w-6 h-6" />
              <Link href="/dashboard/Shipping">
                <button className="text-left">Shipping</button>
              </Link>
            </div>
          </aside>
        )}

        <main
          className={`flex-1 transition-all duration-300 w-full h-screen bg-gray-100 ${
            isSidebarOpen ? "pl-64" : "pl-0"
          }`}
        >
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
