import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmailId] = useState("simran@gmail.com");
  const [password, setPassword] = useState("simran@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      //console.log(res.data)
      dispath(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went Wrong");
      // console.error(err);
    }
  };

  const handleSignUp = async()=>{
    try{

        const res = await axios.post(BASE_URL + "/signup" , {firstName , lastName , email , password}, {withCredentials:true})

        dispath(addUser(res.data.data));
        return navigate("/profile");
    }catch(err){
        console.log(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-4 pb-48">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <img
              src="/logo.png"
              alt="DevTinder Logo"
              className="h-20 w-20 mx-auto rounded-full object-cover shadow-xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-lg"></div>
          </div>
          <h1 className="text-3xl font-bold text-base-content mt-4 mb-2">
            {isLoginForm ? "Welcome Back" : "Hello and welcome!"}
          </h1>
          <p className="text-base-content/60">
            {isLoginForm? "Sign in to your DevTinder account" : "Create Your DevTinder Account"}
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-300/50 hover:shadow-3xl transition-all duration-300">
          <div className="card-body p-8">
            
           { !isLoginForm && <> <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">
                  First Name
                </span>
              </label>
              <div className="relative">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="input input-bordered w-full bg-base-100/50 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12"
                  placeholder="Enter your First Name"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">
                  Last Name
                </span>
              </label>
              <div className="relative">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="input input-bordered w-full bg-base-100/50 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12"
                  placeholder="Enter your email"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div> </>}



            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">
                  Email Address
                </span>
              </label>
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  className="input input-bordered w-full bg-base-100/50 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12"
                  placeholder="Enter your email"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-medium text-base-content/80">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full bg-base-100/50 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 pr-12"
                  placeholder="Enter your password"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base-content/40 hover:text-base-content transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <p className="text-red-500 text-xl">{error}</p>
            <button
              onClick={isLoginForm ? handleLogin : handleSignUp} 
              className="btn btn-primary w-full mb-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus border-none shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              {isLoginForm? "Sign In" : "Sign Up"}
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-base-content/60 text-sm">
                {isLoginForm ? "Don't Have an Account?" : "Already User?"}
              </span>
              <p
                onClick={()=>setIsLoginForm((value)=>!value)}
                className="text-primary hover:cursor-pointer hover:text-primary-focus font-medium transition-colors duration-200"
              >
                {isLoginForm ? "Sign Up Here" : "Login Here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
