import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen text-gray-900 relative">
      <nav className="bg-blue-200/30 h-14 sticky top-0 px-10 flex justify-between place-items-center gap-10">
        <ScrollLink className="flex gap-1 text-lg cursor-pointer" to="contact" smooth={true} duration={500}>
          <p className="text-indigo-500 font-semibold">{"</> "}</p> 
          <p className="text-blue-800 font-semibold">{"Harsh Jain"}</p>
          <p className="text-indigo-500 font-semibold">{" </>"}</p>
        </ScrollLink>

        <div className="flex justify-center place-items-center gap-10">
          <ScrollLink className="cursor-pointer hover:text-indigo-400 transition-all" to="experience" smooth={true} duration={500}>
            Experience
          </ScrollLink>

          <ScrollLink className="cursor-pointer hover:text-indigo-400 transition-all"  to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>

          <ScrollLink className="cursor-pointer hover:text-indigo-400 transition-all"  to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>

          <ScrollLink className="cursor-pointer hover:text-indigo-400 transition-all"  to="achievements" smooth={true} duration={500}>
            Achievements
          </ScrollLink>

          <ScrollLink className="cursor-pointer hover:text-indigo-400 transition-all"  to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </div>
      </nav>

      <section name="contact" className="flex flex-col items-center justify-center text-center py-20">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
          <img
            src="/developer.jpg"
            alt="Harsh Jain"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-5xl font-bold mt-5">Harsh Jain</h1>
        <p className="text-xl mt-3 text-gray-600">Full Stack Developer</p>
        <p className="mt-2 max-w-xl text-gray-500">
          Aspiring Software Developer with practical experience in building responsive and scalable web applications. Strong grasp of DSA, with a focus on writing clean, maintainable code.
        </p>

        <div className="Accounts text-indigo-500 flex justify-center place-items-center gap-10 text-2xl m-8">
          <Link target="_blank" to={'https://github.com/Harshjain09012004'}>
            <FaGithub/>
          </Link>
          
          <Link target="_blank" to={'https://www.linkedin.com/in/harsh-jain-1b2b2324a/'}>
            <FaLinkedin/>
          </Link>

          <Link target="_blank" to={'mailto:harshjain6812@gmail.com'}>
            <FaEnvelope/>
          </Link>
        </div>

        <div className="mt-6 flex gap-4">
          <Link
            target="_blank"
            to={
              "https://drive.google.com/file/d/1yLow0f6tBAu9HFF83g5XPA7cHfEE2qw1/view"
            }
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            My Resume
          </Link>

          <Link
            to={"mailto:harshjain6812@gmail.com"}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Madhav Institute of Technology and Science</h3>
          <p className="text-gray-600">B.Tech in Computer Science Engineering</p>
          <p className="text-gray-500">Oct 2022 – Oct 2026 | CGPA: 9.05</p>
          <p className="text-gray-500">Gwalior, Madhya Pradesh</p>
        </div>
      </section>

      {/* Skills */}
      <section name="skills" className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "C++", "JavaScript", "DSA",
            "Node.js", "MongoDB", "MySQL",
            "HTML", "CSS", "ReactJS",
            "TailwindCSS", "WebSockets",
            "Redis", "JWT", "Python",
            "Next.js", "Express", "OOPS", 
            "Rest API", "Testing", "BootStrap",
            "Deployment", "Debugging", "Problem Solving"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Tools</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[
            { name: "Postman", src: "/tools/postman.png" },
            { name: "VSCode", src: "/tools/vscode.png" },
            { name: "GitHub", src: "/tools/github.png" },
            { name: "Docker", src: "/tools/docker.png" },
            { name: "Figma", src: "/tools/figma.png" },
            { name: "ClickUp", src: "/tools/clickup.png" },
            { name: "NPM", src: "/tools/npm.png" },
            { name: "Canva", src: "/tools/canva.png" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow hover:shadow-lg transition"
              title={tool.name}
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section name="projects" className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>

          <h3 className="text-2xl font-bold mb-4">Full Stack Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="animated-border">
              <Link target="_blank" to={'https://code-mate-ten.vercel.app/'} className="inner rounded-xl bg-gradient-to-br from-white via-gray-50 to-indigo-50">
                <h3 className="text-xl font-bold">Code-Mate</h3>
                <p className="text-gray-600 mt-2">
                  Built a real-time coding platform enabling
                  users to create rooms, collaboratively solve  coding problems, with shared whiteboard. Provides multi-user interaction for interview prep and pair programming.
                </p>
              </Link>
            </div>
            

            <Link target="_blank" to={'https://report-x-eight.vercel.app/'} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition border border-blue-300">
              <h3 className="text-xl font-bold">ReportX</h3>
              <p className="text-gray-600 mt-2">
                MERN-based complaint management system with data visualization,
                role-based access, and tracking functionality.
              </p>
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-4">Backend Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link target="_blank" to={'https://github.com/Harshjain09012004/LetsCode-Project-Links'} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition border border-blue-300">
              <h3 className="text-xl font-bold">LetsCode</h3>
              <p className="text-gray-600 mt-2">
                Microservice-based coding platform supporting multiple languages,
                secure containerized execution, and real-time feedback.
              </p>
            </Link>

            <Link target="_blank" to={'https://github.com/Harshjain09012004/Groot---A-Personal-VCS'} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition border border-indigo-300">
              <h3 className="text-xl font-bold">Groot</h3>
              <p className="text-gray-600 mt-2">
                Lightweight VCS inspired by Git, efficiently tracking file
                changes (SHA-1 hashing) and providing diff comparison.
              </p>
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-4">Frontend Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link target="_blank" to={'https://harshjain09012004.github.io/Two-Good-Co-Clone/'} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition border border-purple-300">
              <h3 className="text-xl font-bold">Two Good Co</h3>
              <p className="text-gray-600 mt-2">
                Designed responsive UI for a personal brand, focusing on modern
                e-commerce experience for niche products.
              </p>
            </Link>

            <Link target="_blank" to={'https://harshjain09012004.github.io/Cynthia-Ugwu-Clone/'} className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-lg transition border border-purple-300">
              <h3 className="text-xl font-bold">Cynthia Ugwu</h3>
              <p className="text-gray-600 mt-2">
                Created portfolio for product designer with visually striking
                modern layouts and responsive UI.
              </p>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="w-full bg-indigo-50">
        {/* Experience */}
        <section name="experience" className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <ul className="border-l-2 border-blue-600 pl-6 space-y-10">
            <li>
              <h3 className="font-bold">Backend Development Intern — Healthletic Lifestyle</h3>
              <p className="text-gray-600">Feb 2025 – May 2025</p>
              <p className="text-gray-500">
                 Contributed to REST API  design and   development for a health management system, worked with databases, Postman testing, and API–UI integration, Documentation & Deployments.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Web Development Intern — Kalazara Technologies</h3>
              <p className="text-gray-600">Dec 2024 – Jan 2025</p>
              <p className="text-gray-500">
                Developed and deployed responsive web pages for the Kalazara Hostels app, while gaining hands-on experience with Next.js,frontend design, and production deployment.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Technical Team — Startup Cell MITS</h3>
              <p className="text-gray-600">Dec 2024 – Present</p>
              <p className="text-gray-500">
                Collaborated with peers to organize technical events, prepare documentation,and apply technical knowledge, strengthening teamwork and communication skills.
              </p>
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section name="achievements" className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link target="_blank" to={'https://leetcode.com/u/Astute_Coder/'} className="bg-white rounded-xl shadow hover:shadow-lg transition border border-blue-400 flex justify-center place-items-center gap-4 p-6">
              <div className="w-10">
                <img title="Leetcode" src="/tools/leetcode.png"/>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">LeetCode Milestone</h3>
                <p className="text-gray-600">Solved <b>1000+ Questions</b></p>
              </div>
            </Link>

            <Link target="_blank" to={'https://leetcode.com/u/Astute_Coder/'} className="bg-white rounded-xl shadow hover:shadow-lg transition border border-blue-400 flex justify-center place-items-center gap-4 p-6">
              <p className="text-4xl">
                🏆
              </p>

              <div>
                <h3 className="text-xl font-bold mb-2">Global Ranking</h3>
                <p className="text-gray-600">Ranked in <b>Top 15K</b></p>
              </div>
            </Link>

            <Link target="_blank" to={'https://cptrack.mitsgwalior.in/'} className="bg-white rounded-xl shadow hover:shadow-lg transition border border-blue-400 flex justify-center place-items-center p-6 gap-4">
              <p className="text-4xl">
                🥈
              </p>

              <div>
                <h3 className="text-xl font-bold mb-2">College Ranking</h3>
                <p className="text-gray-600">Top <b>2 Coder</b> in MITS</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Certificates */}
        <section className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold mb-6">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link target="_blank" to={'https://drive.google.com/file/d/1maOjJxGCj31Urq3TH0DVXn5KbGYmEDjN/view?usp=sharing'} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-indigo-400 flex justify-center place-items-center gap-5">
              <div className="w-24 h-24">
                <img title="Tree" src="/tree.png" className="w-24 object-cover"/>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data Structures & Algorithms</h3>
                <p className="text-gray-600">DSA in C++ completion certificate</p>
              </div>
            </Link>

            <Link target="_blank" to={'https://drive.google.com/file/d/1mw2Zfr2eKrVCimme_4BFWyzSA_tWfK44/view?usp=sharing'} className="p-6 bg-white rounded-xl shadow hover:shadow-lg  transition border border-indigo-400 flex justify-center place-items-center gap-5">
              <div className="w-24">
                <img title="Python" src="/python.png" className="w-24 object-cover"/>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Machine Learning Internship</h3>
                <p className="text-gray-600">Summer Internship Program in ML</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
  
    </div>
  );
}
