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
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 py-6">
  {[
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
    "UI Design",
  ].map((skill) => (
    <div
      key={skill}
      className="
        flex items-center justify-center
        h-24 w-full
        rounded-xl
        border border-teal-400/60
        text-sm font-medium tracking-wide
        text-teal-300
        backdrop-blur-sm
        transition-all duration-300
        hover:bg-teal-400
        hover:text-black
        hover:scale-105
        hover:shadow-lg hover:shadow-teal-400/30
        active:scale-95
      "
    >
      {skill}
    </div>
  ))}
</div>

  </div> 

</section>
</>
);
}

export default Skills;




