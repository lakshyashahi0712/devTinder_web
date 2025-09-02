import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  //console.log(feed);
  const dispatch = useDispatch();

          const refreshPage=()=> {
          window.location.reload();
        }
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      //console.log(res);
      //console.log("Full API Response:", res.data);
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    getFeed()
  }, []);

  if (!feed) return;

  if (feed.length <= 0) {
    return (
      <div className='flex justify-center items-center min-h-[60vh] my-10'>
        <div className="text-center p-8">
          <div className="relative inline-block mb-6">
            <img
              src="/logo.png"
              alt="DevTinder Logo"
              className="h-24 w-24 mx-auto rounded-full object-cover shadow-xl ring-4 ring-primary/20 opacity-50"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 blur-lg"></div>
          </div>

          <h2 className="text-3xl font-bold text-base-content mb-4">
            No More Connections!
          </h2>

          <p className="text-base-content/60 text-lg mb-6 max-w-md mx-auto">
            You've seen all available profiles. Check back later for new developers to connect with!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>refreshPage()} className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus border-none shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Feed
            </button>

            <Link to="/profile"  className="btn btn-outline hover:bg-primary/10 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Edit Profile
            </Link>
          </div>

          <div className="mt-8 p-4 bg-base-200/50 rounded-lg">
            <p className="text-sm text-base-content/50">
              💡 Tip: Complete your profile to get better matches!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    feed && (
      <div className='flex justify-center my-10'>
        <UserCard user={feed[0]} />
      </div>)
  )
}

export default Feed