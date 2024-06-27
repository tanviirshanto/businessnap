"use client"

import React from "react";
import { MdOutlineDashboard, MdPeopleOutline } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { BiSolidBusiness } from "react-icons/bi";
const class1 =
  "hover:bg-[#635bff] hover:text-white text-sm block px-3 py-3 rounded-xl flex gap-2 items-center";

const Sidebar = () => {
    
    return (
      <div className="flex flex-col py-3 px-8 gap-5 h-screen w-full  ">
        <div className="h-14 flex items-center">BusinessSnap</div>
        <div className={class1}>
          <MdOutlineDashboard />
          Dashboard
        </div>
        <div className={class1}>
          <MdPeopleOutline />
          Customers
        </div>
        <div className={class1}>
          <IoPricetags />
          Price List
        </div>
        <div className={class1}>
          <BiSolidBusiness />
          Suppliers
        </div>
        <div className={class1}>
          <CiBank />
          Bank
        </div>
      </div>
    );
}

export default Sidebar;