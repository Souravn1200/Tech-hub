import React from 'react';
import { FaCompressAlt, FaHome, FaListAlt, FaPeopleArrows, FaPeopleCarry, FaQuora, FaSave, FaSearch, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
//todo ismod is admi thik kortehobe
  const isMod = false
  const isAdmin = true;

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/4 bg-gray-800 text-white">
        {/* Side panel */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Dashboard Menu</h3>
          <ul className="text-gray-300">


          {
            isAdmin ? <>
            <li className=" flex items-center gap-2 mb-3 ">
            <FaUser></FaUser>
              <NavLink
                to="/dashboard/myprofile" className="hover:text-white"
                activeClassName="font-bold">  My Profile </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            <FaPeopleArrows></FaPeopleArrows>
              <NavLink
                to="/dashboard/manageusers" className="hover:text-white"
                activeClassName="font-bold"> Manage Users </NavLink>
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
</> : <></>
          }

          {
            isMod ? <>
            <li className=" flex items-center gap-2 mb-3 ">
            <FaQuora></FaQuora>
              <NavLink
                to="/dashboard/prodcutreviewqueue" className="hover:text-white"
                activeClassName="font-bold">  Product Reviewe Queue </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            <FaCompressAlt></FaCompressAlt>
              <NavLink
                to="/dashboard/reportedcontent" className="hover:text-white"
                activeClassName="font-bold">  Repoted Contents </NavLink>
            </li>

          
</> : <></>
          }





            <div className="divider divider-info">General</div>





            <li className=" flex items-center gap-2 mb-3 ">
            <FaHome></FaHome>
              <NavLink
                to="/" className="hover:text-white"
                activeClassName="font-bold">  Home </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            <FaListAlt />
              <NavLink
                to="/products" className="hover:text-white"
                activeClassName="font-bold"> Products </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
            
            <FaSearch />
              <NavLink
                to="/dashboard/myproducts" className="hover:text-white"
                activeClassName="font-bold">  My Products </NavLink>
            </li>

            <li className="flex items-center gap-2 mb-3">
              <FaSave></FaSave>
              <NavLink
                to="/dashboard/addproduct"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Add Product
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
