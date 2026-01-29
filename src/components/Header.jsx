import profile from "../assets/images/mypic.jpg";

function Header(){
    return (
    
   <header className="w-full shadow-2xl bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={profile}
            alt="logo"
            className="h-24 w-24 object-cover rounded-full"
          />
        </div>

       <nav>
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-semibold text-lg ">
            <li><a href="#home" className=" hover:text-blue-500  hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Abouts</a></li>
            <li><a href="#Projects" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">MyProjects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Contact</a></li>
        </ul>

       </nav>

    </div>
    </header>
    );
};

export default Header;