
import { useState } from "react";
import profile from "../assets/images/mypic.jpg";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo / Profile */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="profile"
            className="h-12 w-12 rounded-full object-cover border-2 border-teal-400"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            {["Home", "About", "MyProjects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    px-3 py-2 rounded-md
                    transition-all duration-300
                    hover:bg-teal-400 hover:text-black
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
              <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
                  >
                    {open ? "✕" : "☰"}
            </button>

      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <nav className="bg-gradient-to-br from-teal-500 to-blue-600 px-6 py-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {["Home", "About", "MyProjects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  onClick={() => setOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="
                    block px-4 py-2 rounded-lg
                    transition-all duration-300
                    hover:bg-white/20 hover:translate-x-1
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;