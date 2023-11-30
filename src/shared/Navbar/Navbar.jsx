import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    const navLinks = <>
        <li className='mr-1 font-thin'><NavLink to="/">Home</NavLink></li>

    {
         user ?  <></> :<li className='mr-1'> <NavLink to="/login">Login</NavLink></li>
        
    }
        <li className='mr-1 font-thin'> <NavLink to="/products">Products</NavLink></li>


    </>
    // TODO user to make dinamic
    // const user = true;
    // const image = true;

    const handleLogOut = () => {
        logOut();
    }

console.log(user);
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/f99JQZD/de.jpg" className='rounded-xl w-64 lg:ml-6' alt="" />
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 lg:mr-6">
                    {navLinks}
                </ul>
                {/* <div className='flex gap-2'>

                    <div className='text-sm mt-2 mr-2'>
                        {user?.displayName} <br />
                        {user?.email}
                    </div>
                </div> */}

                {
                    user ? <> <br />

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="">
                                <img src={user?.photoURL} className="h-12 w-12 rounded-[50%] object-cover" alt="" />
                                
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                
                                <li className="pointer-events-none mb-2">{user?.displayName}</li>
                                <li>
                                    <Link className=" mb-2 text-white py-2 px-4 rounded-md bg-[#6096B4] hover:bg-[#3d657a]" to='/dashboard'> <button >Dashboard</button></Link>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className=" mb-2 text-white py-2 px-4 rounded-md bg-[#6096B4] hover:bg-[#3d657a]">Logout</button>
                                </li>
                                
                            </ul>
                        </div>
                    </> :

                        <></>

                }
            </div>


        </div>
    );
};

export default Navbar;