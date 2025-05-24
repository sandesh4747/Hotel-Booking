import React from "react";
import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className=" h-full flex">
        <Sidebar />
        <div className="flex-1 p-4 pb-20  pt-10 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
