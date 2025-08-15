// src/App.jsx

function App() {
  return (
    <>
      <div className="navbar min-h-20 mt-4 bg-gradient-to-r from-primary to-secondary shadow-lg backdrop-blur-sm border-b border-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost hover:bg-transparent focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none group transition-all duration-300" style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>
            <div className="relative">
              <img
                src="/logo.png"
                alt="DevTinder Logo"
                className="h-16 w-16 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20 group-hover:ring-white/40"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="ml-4 text-2xl font-bold text-base-content group-hover:text-primary-content transition-colors duration-300">
              DevTinder
            </span>
          </a>
        </div>
        <div className="flex gap-3 items-center mr-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary/30 transition-all duration-300">
              <div className="w-10 rounded-full ring-2 ring-base-300 hover:ring-primary transition-all duration-300">
                <img
                  alt="User profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-xl z-[1] mt-3 w-52 p-3 shadow-xl border border-base-300">
              <li>
                <a className="justify-between hover:bg-primary/10 rounded-lg transition-colors duration-200">
                  Profile
                  <span className="badge badge-primary badge-sm">New</span>
                </a>
              </li>
              <li><a className="hover:bg-primary/10 rounded-lg transition-colors duration-200">Settings</a></li>
              <li><a className="hover:bg-error/10 text-error rounded-lg transition-colors duration-200">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="text-7xl">hello world</h1>
    </>
  )
}

export default App;