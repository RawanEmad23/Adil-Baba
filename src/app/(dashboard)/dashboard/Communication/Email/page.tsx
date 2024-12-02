import React from "react"; // or "import * as React from 'react';"
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import star from "../../../../../imgs/star.png";

const EmailSection = () => {
  const menuItems = [
    { label: "Inbox", count: "1253", icon: star },
    { label: "Starred", count: "245", icon: star },
    { label: "Sent", count: "24,532", icon: star },
    { label: "Draft", count: "09", icon: star },
    { label: "Spam", count: "14", icon: star },
    { label: "Important", count: "18", icon: star },
    { label: "Bin", count: "09", icon: star },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 gap-8 min-h-screen p-4">
     
      <div className="border-r  rounded-md px-4 py-3 w-full md:w-[15rem] bg-white h-[25rem] flex flex-col">
        <Dialog>
          <DialogTrigger>
            <button className="w-full sm:w-[136px] h-[40px] bg-[#f3b852] rounded-2xl text-white font-bold flex justify-center items-center">
              + Compose
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center mb-10">
              <TooltipProvider>
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-[#fff9e7] px-4 py-2">
        <h2 className="text-xl font-semibold">Compose Email</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="px-3 py-1 h-auto text-sm bg-[#f8b84e] hover:bg-[#f8b84e]/90"
          >
            CC
          </Button>
          <Button
            variant="ghost"
            className="px-3 py-1 h-auto text-sm bg-[#ffeec4] hover:bg-[#ffeec4]/90"
          >
            BC
          </Button>
       
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <Input 
          placeholder="Recipients" 
          className="border-0 border-b rounded-none focus-visible:ring-0 px-0" 
        />
        <Input 
          placeholder="Subject"
          className="border-0 border-b rounded-none focus-visible:ring-0 px-0"
        />
        <div className="min-h-[200px]" />
        <div className="flex items-center gap-2">
          <Button 
            variant="default"
            className="bg-[#f8b84e] hover:bg-[#f8b84e]/90 text-black"
          >
            Send
          </Button>
          <div className="flex items-center gap-1 ml-2">
            <TooltipProvider>
            {[
              { icon: "🔗", tooltip: "Add link" },
              { icon: "🖼️", tooltip: "Add image" },
              { icon: "📎", tooltip: "Attach file" },
              { icon: "B", tooltip: "Bold", className: "font-bold" },
              { icon: "I", tooltip: "Italic", className: "italic" },
              { icon: "U", tooltip: "Underline", className: "underline" },
            ].map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-muted"
                  >
                    <span className={cn("text-sm", item.className)}>
                      {item.icon}
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <h3 className="font-bold mt-4">My Email</h3>
        <ul className="space-y-2 text-sm mt-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between hover:bg-gray-50 px-2 py-1 rounded-md"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={20}
                  height={20}
                />
                <span className="text-gray-600 hover:text-yellow-500">
                  {item.label}
                </span>
              </div>
              <span className="text-xs px-2 py-1">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>


      <div className="flex-1 px-4 py-3 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center border-b pb-2 mb-3">
          
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-lg w-1/3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
               <button>
                        <i className="fa-solid fa-trash text-[#e13e3e]"></i>
                      </button>
        </div>
        <ul className="divide-y">
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-4 hover:bg-gray-50 transition duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                />
                <span className="text-yellow-500 text-lg">★</span>
                <div>
                  <p className="font-bold text-gray-700">Omar Ahmed</p>
                  <p className="text-sm text-gray-500 truncate max-w-md text-wrap">
                    We are thrilled to announce the launch of our latest products
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-400">8:38 AM</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailSection;
