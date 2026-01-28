import project1 from "../assets/images/movieTicket.jpg";
import project2 from "../assets/images/futsal.png";
import project3 from "../assets/images/Edu.jpg";
import project4 from "../assets/images/RoomRent.png";
import project5 from "../assets/images/girl2.png";
import project6 from "../assets/images/Quiz.jpg";

const projects = [
  {
    id: 1,
    title: "Movie-Ticketing System",
    desc: "A web application that allows users to browse movies, select showtimes, choose seats, and book tickets through a simple and user-friendly interface.",
    image: project1,
  },
  {
    id: 2,
    title: "Futsal Booking System",
    desc: "An online platform for checking court availability and booking futsal slots, designed to make scheduling quick, easy, and efficient for users.",
    image: project2,
  },
  {
    id: 3,
    title: "Edu-Management",
    desc: "A system that manages students, courses, and academic records in one place, helping streamline administrative tasks and improve organization.",
    image: project3,
  },
  {
    id: 4,
    title: "Room-Rental System",
    desc: "A web-based platform where users can browse available rooms, view details, and make rental inquiries or bookings with ease.",
    image: project4,
  },
  {
    id: 5,
    title: "Fit-Gear E-commerce Website",
    desc: "An online store for fitness products featuring product listings, cart functionality, and a smooth checkout experience with a modern, responsive design.",
    image: project5,
  },
  {
    id: 6,
    title: "Quiz Game",
    desc: "An interactive quiz application that tests users with multiple-choice questions and provides instant feedback on scores and performance.",
    image: project6,
  },
];


const MyProjects = () => {
  return (
    <section
      id="Projects"
      className="bg-[#0b0b0b] text-white py-24 px-6">

       <div className="max-w-7xl mx-auto" >
        
        <div className="text-center mb-16">
          <p className="text-gray-400 tracking-widest uppercase text-sm">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Featured <span className="text-emerald-400">projects.</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121212] rounded-xl p-6 border border-emerald-400/30 hover:border-emerald-400 transition group"
            >
              
              <div className="relative overflow-hidden rounded-lg border border-emerald-400/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              
              <div className="mt-6">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyProjects;
