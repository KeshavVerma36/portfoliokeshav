"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,   
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id '${sectionId}' not found.`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between h-20 bg-gray-800 text-white p-4 md:p-6" style={{backgroundColor:"#111827"}}>
        <div className="text-2xl font-bold">Keshav Verma</div>
        <div className="hidden md:flex text-xl gap-x-5">
          <p onClick={() => scrollToSection(" ")} className="cursor-pointer">About Me</p>
          <p onClick={() => scrollToSection("skills")} className="cursor-pointer">Skills</p>
          <p onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</p>
          <p onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact Me</p>
        </div>
        <div className="md:hidden flex flex-col gap-y-2">
          <button className="text-lg" onClick={toggleMenu}>Menu</button> {/* Add menu functionality if needed */}
        </div>
      </div> 

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <p onClick={() => { scrollToSection("about"); toggleMenu(); }} className="cursor-pointer py-2">About Me</p>
          <p onClick={() => { scrollToSection("skills"); toggleMenu(); }} className="cursor-pointer py-2">Skills</p>
          <p onClick={() => { scrollToSection("projects"); toggleMenu(); }} className="cursor-pointer py-2">Projects</p>
          <p onClick={() => { scrollToSection("contact"); toggleMenu(); }} className="cursor-pointer py-2">Contact Me</p> 
        </div>
      )}

      {/* Introduction */}
      <div className="flex flex-col items-center justify-center h-auto p-4 md:p-8 m-24 mb-10">
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-screen-lg">
    <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
      <div className="text-4xl md:text-6xl font-extrabold mb-12" data-aos="fade-down">
        Hi, I'm <span style={{color:"#2097F3"}}>Keshav!</span>
      </div>
      <p className="text-xl md:text-3xl font-light mt-4 text-center md:text-left" data-aos="fade-right">
        A web developer based in Delhi, India, creating seamless digital experiences. Elevate Your Web Presence. Explore my work and let’s discuss your project!
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-16 mb-4">
        <button className="button1" type="button" data-aos="fade-up-right" onClick={() => scrollToSection("about")}>About Me</button>
        <button className="button2" type="button" data-aos="fade-up-left" data-aos-duration="800" onClick={() => scrollToSection("contact")}>Contact Me</button>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 mb-10">
      <img src="/images/kp.png" width={450} alt="Profile Picture" className="object-cover" data-aos="zoom-in"/>
    </div>
  </div>
</div>
<div className="gradiant1" style={{height:'50px'}}></div>
{/* About Me Section */}
<div id="about" className="flex flex-col items-center justify-center bg-gray-800 text-white pt-20 pb-20 px-4"   style={{backgroundColor:"#111827"}}>
  <div className="text-5xl md:text-6xl mb-10 text-center ">About Me</div>
  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
    <img src="/images/kp2.jpeg" width={420} alt="Keshav" className="object-cover" data-aos="zoom-in"/>
    <div className="text-lg md:text-2xl" style={{ width: '100%', maxWidth: '500px' }} data-aos="fade-left">
      <p className="md:flex md:flex-col md:justify-center">
      Hi, I’m Keshav, a 20-year-old Computer Science student with a strong passion for coding and technology. My fascination with programming started early, and I thrive on tackling complex challenges and finding innovative solutions. I’m dedicated and hardworking, always seeking to deepen my knowledge and improve my skills in this dynamic field.
        <br /><br />
        When I’m not studying or coding, I enjoy exploring new technologies, working on personal projects, and engaging with open-source communities. I’m enthusiastic about the future and eager to contribute meaningfully through my skills and creativity. I look forward to connecting with others and exploring exciting opportunities together!
      </p>
    </div>
  </div>
</div>

<div className="gradiant" style={{height:'50px'}}></div>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Front-End Section */}
            <div className="p-4" >
              <div className="text-4xl md:text-6xl text-blue-500 mb-4">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl md:text-3xl font-semibold mb-4">Front-End</h3>
              <div className="flex justify-center mb-4">
                <img src="/images/html.png" alt="Front-End" width={150} className="mx-auto" data-aos="flip-left"/>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-red-600 text-white px-2 py-1 rounded">HTML5</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded">CSS3</span>
                <span className="bg-yellow-500 text-white px-2 py-1 rounded">JavaScript</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">TypeScript</span>
                <span className="bg-teal-500 text-white px-2 py-1 rounded">React</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded">Next.js</span>
                <span className="bg-teal-600 text-white px-2 py-1 rounded">Tailwind CSS</span>
              </div>
            </div>

            {/* Back-End Section */}
            <div className="p-4">
              <div className="text-4xl md:text-6xl text-blue-500 mb-4">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="text-xl md:text-3xl font-semibold mb-4">Back-End</h3>
              <div className="flex justify-center mb-4">
                <img src="/images/backend.png" alt="Back-End" width={150} className="mx-auto" data-aos="flip-up"/>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded">Node.js</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">Express</span>
                <span className="bg-blue-400 text-white px-2 py-1 rounded">MySQL</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded">MongoDB</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded">GraphQL</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded">Django</span>
                <span className="bg-teal-600 text-white px-2 py-1 rounded">Spring Boot</span>
              </div>
            </div>

            {/* Tools Section */}
            <div className="p-4">
              <div className="text-4xl md:text-6xl text-blue-500 mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl md:text-3xl font-semibold mb-4">Tools</h3>
              <div className="flex justify-center mb-4">
                <img src="/images/settings.png" alt="Tools" width={150} className="mx-auto" data-aos="flip-right"/>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-orange-600 text-white px-2 py-1 rounded">Git</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded">GitHub</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded">VS Code</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">Postman</span>
                <span className="bg-blue-400 text-white px-2 py-1 rounded">Docker</span>
                <span className="bg-yellow-600 text-white px-2 py-1 rounded">Jenkins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradiant3" style={{height:'50px'}}></div>

      <section className="bg-gray-900 py-16" id="projects" style={{backgroundColor:"#111827"}}>
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-white text-center mb-12">Web Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Project Card 1 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
        <img src="/images/nextil.png" alt="Nextil Project" className="w-full h-40 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Nextil</h3>
          <p className="text-gray-400 mb-4">Waitlist Management System</p>
          <p className="text-gray-300 mb-4">
            NEXTIL is a waitlist management system that allows businesses like barbershops, Salons and Nail Salons to manage their Walk-in and keep track of their earnings.
          </p>
          <h4 className="text-gray-400 font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-black text-white px-2 py-1 rounded">Next.js</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded">React</span>
            <span className="bg-cyan-500 text-white px-2 py-1 rounded">Tailwind CSS</span>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">JavaScript</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">Spring Boot</span>
            {/* Add more technologies as needed */}
          </div>
          <div className="flex justify-between">
            <a href="#" className="bg-white text-gray-900 px-4 py-2 rounded font-semibold">Live Demo</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Source Code</a>
          </div>
        </div>
      </div>

      {/* Project Card 2 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
        <img src="/images/connectme.png" alt="ConnectME Project" className="w-full h-40 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">ConnectME</h3>
          <p className="text-gray-400 mb-4">Social Media</p>
          <p className="text-gray-300 mb-4">
            ConnectME is a social media application that allows users to create an account, make posts, and interact with other users. It is built using the MERN stack.
          </p>
          <h4 className="text-gray-400 font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">React</span>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">JavaScript</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded">Node.js</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded">MongoDB</span>
            <span className="bg-cyan-500 text-white px-2 py-1 rounded">Tailwind CSS</span>
            {/* Add more technologies as needed */}
          </div>
          <div className="flex justify-between">
            <a href="#" className="bg-white text-gray-900 px-4 py-2 rounded font-semibold">Live Demo</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Source Code</a>
          </div>
        </div>
      </div>

      {/* Project Card 3 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
        <img src="/images/bookme.png" alt="BookMe Project" className="w-full h-40 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">BookMe</h3>
          <p className="text-gray-400 mb-4">Scheduling App</p>
          <p className="text-gray-300 mb-4">
            BookMe is a platform empowering Salon|Barbershop owners to elevate their business. It offers online appointment booking and management for customers.
          </p>
          <h4 className="text-gray-400 font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">React</span>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">JavaScript</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded">Node.js</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded">MongoDB</span>
            <span className="bg-cyan-500 text-white px-2 py-1 rounded">Tailwind CSS</span>
            {/* Add more technologies as needed */}
          </div>
          <div className="flex justify-between">
            <a href="#" className="bg-white text-gray-900 px-4 py-2 rounded font-semibold">Live Demo</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Source Code</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="gradiant4" style={{height:'50px'}}></div>

<section id="certificates" className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <img className="rounded shadow-lg" src="images/cert1.jpg" alt="" data-aos="zoom-in-up"/>
            <img className="rounded shadow-lg" src="images/cert3.png" alt="" data-aos="zoom-in-up"/> 
            <img className="rounded shadow-lg" src="images/cert2.jpg" alt="" data-aos="zoom-in-up"/>
          </div>
        </div>
      </section>

      <div className="gradiant5" style={{height:'37.5px'}}></div>

<section className="bg-gray-100 py-16" id="contact">
  <div className="container mx-auto px-4 text-center ">
    <div className="custom shadow-lg rounded-lg p-6 mb-16">
      <h2 className="text-4xl font-bold mb-4">Elevate Your Web Presence</h2>
      <p className="text-xl text-gray-300 mb-12">Unlock the Power of Web Development to Stand Out Online</p>
    </div>
    
    <h3 className="text-5xl font-bold text-gray-900 mb-8">Contact Me</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Contact Option 1 */}
      <a href="mailto:vermakeshav580@gmail.com" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-125">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" className="w-12 h-12" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900">Email</h4>
        <p className="text-gray-600">Let's get in touch.</p>
      </a>
      
      {/* Contact Option 2 */}
      <a href="https://www.linkedin.com/in/keshav-verma-23348b233/" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-125">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-12 h-12" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900">LinkedIn</h4>
        <p className="text-gray-600">Let's connect.</p>
      </a>
      
      {/* Contact Option 3 */}
      <a href="https://github.com/KeshavVerma36" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-125">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-12 h-12" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900">GitHub</h4>
        <p className="text-gray-600">Check out my repos.</p>
      </a>
      
      {/* Contact Option 4 */}
      <a href="https://www.instagram.com/vermakeshav719/" className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ">
  <div className="flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-125">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png" alt="Instagram" className="w-12 h-12" />
  </div>
  <h4 className="text-xl font-semibold text-gray-900">Instagram</h4>
  <p className="text-gray-600">Follow me for updates.</p>
</a>


    </div>
  </div>
</section>  

 

<button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 z-50"
        aria-label="Scroll to Top"
      >
        <img src="images/arrowhead-up.png" width={30} alt="" />
      </button>
    </div>
  );
}
