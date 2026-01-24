import profile from "../assets/images/mypic.jpg";

function Header(){
    return (
    
   <div className="min-h-90vh mx-auto px-8 py-4 flex justify-between items-center shadow-2xl">
      <img src={profile} alt="logo" className="h-24 width-auto object-contain mx-20 rounded-full "/>
       
       <div>
        <ul className="flex items-center justify-center gap-8 text-grey text-2xl font-semibold  ">
            <li><a href="#home" className=" hover:text-blue-500  hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">About</a></li>
            <li><a href="#Projects" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">MyProjects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-2  hover:border-2 hover:rounded-md transition">Contact</a></li>
        </ul>

       </div>

    </div>
    );
};

export default Header;