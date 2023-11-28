import React from 'react';
import { FaListAlt, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex w-screen">
      <div className="w-1/4 bg-gray-800 text-white">
        {/* Side panel */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Dashboard Menu</h3>
          <ul className="text-gray-300">

            <li className=" flex items-center gap-2 mb-3 ">
            <FaUser></FaUser>
              <NavLink
                to="/dashboard/myprofile" className="hover:text-white"
                activeClassName="font-bold">  My Profile </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            <FaListAlt />
              <NavLink
                to="/dashboard/addproduct" className="hover:text-white"
                activeClassName="font-bold">  Add Product </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            
            <FaSearch />
              <NavLink
                to="/dashboard/myproducts" className="hover:text-white"
                activeClassName="font-bold">  My Products </NavLink>
            </li>



            <li className="mb-2">
              <NavLink
                to="/dashboard/overview"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Overview
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-gray-200 p-8">
        {/* Main content */}
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
        {
            <Outlet></Outlet>
        }
      </div>
    </div>
  );
};

export default Dashboard;
