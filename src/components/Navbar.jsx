import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';


const Navbar = () => {

    const user = useSelector((store)=> store.user);
    const dispatch = useDispatch();
    const navigate  =  useNavigate(); 
    
    const handleLogout = async()=>{

      try{
        const res = await axios.post(BASE_URL+"/logout",
          {},
          {withCredentials:true}
        )
        dispatch(removeUser());
        return navigate("/login")
      }
            catch(err){
              console.log(err)
      }

    }
  return (
    <div className="navbar min-h-20 mt-4 bg-gradient-to-r from-primary to-secondary shadow-lg backdrop-blur-sm border-b border-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost hover:bg-transparent focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none group transition-all duration-300" style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>
            <div className="relative">
              <img
                src="/logo.png"
                alt="DevTinder Logo"
                className="h-16 w-16 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20 group-hover:ring-white/40"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="ml-4 flex flex-col">
              <span className="text-2xl font-bold text-base-content group-hover:text-primary-content transition-colors duration-300">
                DevTinder
              </span>
              <span className="text-sm text-base-content/70 group-hover:text-primary-content/80 transition-colors duration-300 -mt-1">
                Compile your next connection
              </span>
            </div>
          </Link>
        </div>
        <div className="flex gap-3 items-center mr-4 text-black">
          {user && <div className="dropdown dropdown-end flex">
            <p className='pr-5 my-2'>Welcome {user.firstName}</p>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary/30 transition-all duration-300">
              <div className="w-10 rounded-full ring-2 ring-base-300 hover:ring-primary transition-all duration-300">
                <img
                  alt="User photo"
                  src={user.photoUrl}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-xl z-[1] mt-3 w-52 p-3 shadow-xl border border-base-300">
              <li>
                <Link to="/profile" className="text-white justify-between hover:bg-primary/10 rounded-lg transition-colors duration-200">
                  Profile
                  <span className="badge badge-primary badge-sm">New</span>
                </Link>
              </li>
              <li><Link to="/connections" className="text-white hover:bg-primary/10 rounded-lg transition-colors duration-200">Connections</Link></li>
              <li><Link to="/requests" className="text-white hover:bg-primary/10 rounded-lg transition-colors duration-200">Requests</Link></li>
              <li><a onClick={handleLogout} className=" hover:bg-error/10 text-error rounded-lg transition-colors duration-200">Logout</a></li>
            </ul>
          </div>}
        </div>
      </div>
  )
}

export default Navbar