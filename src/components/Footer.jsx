import React from 'react'

const Footer = () => {
    return (
        <div className=" bottom-0 left-0 right-0 z-40">
            <footer className="bg-gradient-to-r from-primary to-secondary text-primary-content relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary"></div>

                <div className="relative z-10 container mx-auto px-6 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

                        {/* Brand Section */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-2">
                                <div className="relative group">
                                    <img
                                        src='/logo.png'
                                        alt="DevTinder Logo"
                                        className="h-12 w-12 rounded-full object-cover shadow-xl group-hover:scale-110 transition-all duration-300 ring-2 ring-white/30 group-hover:ring-white/50"
                                    />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                                </div>
                                <div className="ml-3">
                                    <h1 className='text-xl font-bold bg-gradient-to-r from-white to-primary-content bg-clip-text text-transparent'>
                                        DevTinder
                                    </h1>
                                    <p className="text-primary-content/80 text-xs font-medium">Compile your next connection</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="text-center md:text-right">
                            <h6 className="text-sm font-semibold mb-2 text-white">Connect With Us</h6>
                            <div className="flex justify-center md:justify-end gap-2">
                                <a href="#" className="group">
                                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-white group-hover:text-accent transition-colors duration-300">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-white group-hover:text-accent transition-colors duration-300">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-white group-hover:text-accent transition-colors duration-300">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-white group-hover:text-accent transition-colors duration-300">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-white/20 mt-4 pt-3 text-center">
                        <p className="text-primary-content/70 text-xs">
                            © 2024 DevTinder. All rights reserved. Made with ❤️ for developers.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer