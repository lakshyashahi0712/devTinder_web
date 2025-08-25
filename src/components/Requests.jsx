import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
    const requests = useSelector((store)=>store.requests)
  const dispatch = useDispatch();
      const [isLoading, setIsLoading] = useState(true);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      //console.log("req" , res)
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err.message);
    } finally{
        setIsLoading(false)
    }
  };
   useEffect(() => {
          fetchRequests();
      }, []);


       if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20 flex items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                    <p className="text-lg text-base-content/70">Loading your Requests...</p>
                </div>
            </div>
        );
    }

    if (!requests || requests.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="mb-8">
                        <svg className="w-24 h-24 mx-auto text-base-content/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-base-content mb-4">No Requests Yet</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        Your Requests
                    </h1>
                    
                </div>

                {/* Connections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                    {requests.map((request, index) => {
                        //console.log("Request data:", request);
                        const { _id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
                        return (
                            <div 
                                key={_id || index}
                                className="card bg-gradient-to-br from-base-100/95 to-base-200/90 backdrop-blur-xl shadow-xl border border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-105 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <figure className="px-6 pt-6">
                                    <div className="relative">
                                        <img
                                            src={photoUrl}
                                            alt={`${firstName} ${lastName}`}
                                            className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        
                                        
                                    </div>
                                </figure>
                                
                                <div className="card-body px-6 pb-6">
                                    <div className="text-center mb-4">
                                        <h2 className="card-title text-xl font-bold text-base-content justify-center mb-2">
                                            {firstName} {lastName}
                                        </h2>
                                        
                                        <div className="flex items-center justify-center gap-4 text-sm text-base-content/70 mb-3">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {age} years
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                {gender}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-base-content/80 text-center text-sm leading-relaxed line-clamp-3">
                                        {about || "No bio available"}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>


            </div>
        </div>
    );
  
};

export default Requests;
