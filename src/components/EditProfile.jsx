import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (error && error.includes('successfully')) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const saveProfile = async () => {
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName, lastName, photoUrl, age, about, gender
      }, { withCredentials: true });
      dispatch(addUser(res?.data?.data));
      setError("Profile updated successfully!");
    } catch (err) {
      console.error("Save profile error:", err);
      setError(err.response?.data?.error || err.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Edit Form */}
          <div className="w-full max-w-lg">
            <div className="card bg-gradient-to-br from-base-100/95 to-base-200/90 backdrop-blur-xl shadow-2xl border border-primary/20 hover:shadow-primary/10 transition-all duration-500">
              <div className="card-body p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Edit Your Profile
                  </h2>
                  <p className="text-base-content/70 mt-2">Update your information to find better matches</p>
                </div>

                <div className="space-y-6">
                  {/* First Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        First Name
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input input-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 hover:bg-base-100/90"
                        placeholder="Enter your first name"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Last Name
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="input input-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 hover:bg-base-100/90"
                        placeholder="Enter your last name"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Photo URL */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Photo URL
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="input input-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 hover:bg-base-100/90"
                        placeholder="Enter your photo URL"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Age
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="input input-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 hover:bg-base-100/90"
                        placeholder="Enter your age"
                        min="18"
                        max="100"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        Gender
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="select select-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 hover:bg-base-100/90"
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* About */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        About
                      </span>
                    </label>
                    <div className="relative">
                      <textarea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="textarea textarea-bordered w-full bg-base-100/70 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-12 pt-4 hover:bg-base-100/90 min-h-[100px]"
                        placeholder="Tell us about yourself..."
                      />
                      <svg className="absolute left-4 top-4 w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Error/Success Message */}
                {error && (
                  <div className={`alert ${error.includes('successfully') ? 'alert-success' : 'alert-error'} mt-6 animate-pulse`}>
                    <div className="flex items-center gap-2">
                      {error.includes('successfully') ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <button 
                  onClick={saveProfile} 
                  disabled={isLoading}
                  className="btn btn-primary w-full mt-8 bg-gradient-to-r from-primary to-secondary hover:from-primary-focus hover:to-secondary-focus border-none shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save Profile
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="w-full max-w-sm">
            <div className="sticky top-8">
              <h3 className="text-xl font-bold text-center mb-4 text-base-content/80">Live Preview</h3>
              <UserCard user={{firstName, lastName, age, gender, about, photoUrl}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
