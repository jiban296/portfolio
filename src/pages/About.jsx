import myphoto from "../assets/images/mypic.jpg";

function About() {
  return (
    <section id="about" className="text-white px-6 py-12">

      <div className="text-center mb-16 mr-20">
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          My Bio
        </p>
        <h2 className="text-4xl font-bold mt-2">
          About <span className="text-teal-400">Me</span>.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-30">

        <div className="relative flex justify-center">

          <div className="absolute  rounded-full border border-teal-400/30  animate-spin-slow"></div>

          <div className="relative w-100 h-100 rounded-full border-2 border-teal-400 p-6">
            <img
              src={myphoto}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border border-teal-400"
            />
          </div>


          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full">
            JS
          </span>

          <span className="absolute top-1/2 -right-8 -translate-y-1/2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
            HTML5
          </span>

          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#9929EA] text-white px-2 py-1 rounded-full text-sm">
            React
          </span>

          <span className="absolute top-1/2 -left-6 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
            CSS
          </span>
        </div>


        <div className="max-w-xl">
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a frontend developer passionate about building clean, responsive, and user-friendly web interfaces.
              I enjoy turning ideas and designs into functional digital experiences that look great on any device.
            </p>
            <p>
              I work with modern web technologies to create fast, accessible, and visually appealing websites.
              I focus on writing clean code, improving performance, and ensuring smooth user interaction.
            </p>
            <p>
              I’m always learning and exploring new tools to sharpen my skills and stay current with web trends.
              Through my projects, I aim to create meaningful, intuitive experiences that users enjoy.
            </p>
          </div>

          <a
            href="/MyResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-teal-400 text-black rounded-md hover:bg-red-300 transition">
            View Resume 📄

          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
