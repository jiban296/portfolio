import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Data:", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">

        
        <div className="text-center mb-16">
          <p className="text-gray-400 tracking-widest uppercase text-sm">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white mt-2">
            Contact <span className="text-emerald-400">me.</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I am currently open to full-time, contract or part-time opportunities
            in Front End Development.
          </p>
        </div>

        
        <div className="bg-[#121212] rounded-xl grid md:grid-cols-2 gap-10 p-10">

          
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Have an awesome project idea?
            </h3>
            <p className="text-emerald-400 mb-8">Let’s Discuss.</p>

            <ul className="space-y-5 text-gray-400">
              <li className="flex items-center gap-3">📞 +977 9866357658</li>
              <li className="flex items-center gap-3">✉️ jibanadhikari296@gmail.com</li>
              <li className="flex items-center gap-3">📍 Syangja, Nepal.</li>
            </ul>
          </div>

          
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="text-gray-400 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter message"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              Send Message ✉️
            </button>

            
            {success && (
              <p className="text-emerald-400 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
