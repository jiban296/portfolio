
function Home() {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center {bg-gradient-to-r from blue-500 to-indigo-600} ">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl ">
                        Hi, I am{" "}
                        <span className="text-yellow-300">Jiban Adhikari</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
                        A seasoned Frontend Developer transforming ideas into stunning{" "}
                        <br className="hidden mb:block" />digital experiences. Let's create something amazing!
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 bg-green-700 text-xl font-bold rounded-full  hover:bg-yellow-300 transition">
                            View Portfolio
                        </button>

                        <button className="py-4 px-6 border border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition ">
                            Contact Me
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#2B2A2A] text-white py-20">
                <div className="text-center mb-16">
                    <p className="text-grey-400 trackig-widest text-sm uppercase ">Services</p>
                    <h2 className="text-4xl font-bold mt-2">What <span className="text-teal-400"> I do </span>.</h2>
                </div>

                <div className="max-w-7xl  gap-4 mx-auto px-6 grid grid-cols-1 md:grid-cols-3">

                    <div className="relative bg-teal-400 text-black rounded-xl p-8 h-[320px]">
                        <span className="absolute top-6 right-10 text-5xl font-bold opacity-20">01</span>
                        <div className="text-2xl mb-6"> {'< />'}</div>
                        <h3 className="text-xl font-semibold mb-4">Web Development </h3>
                        <p className="text-sm leading-relaxed">
                            I use my knowledge of various programming languages such as HTML5,
                            CSS3, JavaScript, Tailwind to build digital solutions for users.
                        </p>
                    </div>

                    <div className="relative bg-[#1a1a1a] border border-teal-400/30 rounded-xl p-8 h-[320px]">
                        <span className="absolute top-6 right-10 text-5xl font-bold opacity-20">02</span>
                        <div className="text-2xl mb-6">{"\u{1F3A8}"} </div>
                        <h3 className="text-xl font-semibold mb-4"> UI Design</h3>
                        <p className="text-sm leading-relaxed">
                            Crafting user-centric digital experiences that seamlessly blend
                            aesthetics and functionality. Expert in user-centered design and
                            responsive interfaces.
                        </p>
                    </div>

                    <div className="relative bg-[#1a1a1a] border border-teal-400/30 rounded-xl p-8 h-[320px]">
                        <span className="absolute top-6 right-10 text-5xl font-bold opacity-20"> 03</span>
                        <div className="text-2xl mb-6"> {"\u{270F}"}</div>
                        <h3 className="text-xl font-semibold mb-4">Content Writing</h3>
                        <p className="text-sm leading-relaxed">
                            Weaving impactful narratives and delivering engaging content that
                            resonates with readers. Skillfully combining creativity with research
                            to create compelling pieces.
                        </p>
                    </div>
                </div>

            </section>


        </>
    );
}

export default Home;