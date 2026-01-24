function Skills() {
return (
<>
<section id="skills" className="bg-[#1E1E1E] text-white px-6 py-16">

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="max-w-md">
          <p className="text-gray-400 text-lg font-semibold uppercase tracking-widest mb-2">
            Skills
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Technical <span className="text-teal-400">skills</span>.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I have a strong foundation in modern frontend technologies including HTML5,
            CSS3, JavaScript, and React.js, with experience building responsive and
            user-friendly interfaces. I focus on clean UI design, reusable components,
            and efficient user interactions.
          </p>

        </div>
  
      <div className="grid grid-cols-6 py-2 md:grid-cols-6 md:gap-6">
            <div className="col-span-2 w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide 
                hover:bg-teal-400 
                hover:text-black transition ">
                 HTML5
            </div>

            <div className="col-span-2 w-36 h-18 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-md
                text-sm tracking-wide 
                hover:bg-teal-400 
                hover:text-black transition">
                    JAVASCRIPT
            </div>

            <div className=" col-span-2 w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide 
                hover:bg-teal-400 
                hover:text-black transition">
                    CSS3
            </div>

            <div className=" col-span-3 justify-self-center w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide 
                hover:bg-teal-400 
                hover:text-black transition">
                    REACT
            </div>

            <div className=" col-span-3 justify-self-center w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide 
                hover:bg-teal-400 
                hover:text-black transition">
                    TAILWIND
            </div>

            <div className="col-span-3 w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide
                 hover:bg-teal-400 
                 hover:text-black transition">
                    UI DESIGN
            </div>

            <div className=" col-span-3 w-24 h-24 
                flex items-center justify-center
                border-2 border-teal-400 
                rounded-full
                text-sm tracking-wide 
                hover:bg-teal-400
                hover:text-black transition">
                    TYPESCRIPT 
            </div>
      </div> 
  </div> 

</section>
</>
);
}

export default Skills;




