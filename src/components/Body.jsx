import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'


const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
const userData = useSelector((store)=>store.user);

  

  return (
    <div>
<Navbar />
<Outlet />
<Footer/>
</div>
)
}

export default Body