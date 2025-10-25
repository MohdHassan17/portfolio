"use client";
import RotatingButton from "@/components/RotatingButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaNode,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import Button from "@/components/Button";

export default function Home() {
  const colours = ["#ef4444", "#eab308", "#22c55e"];
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setSubmitStatus({
          message: "Message sent successfully!",
          isError: false,
        });
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          message: "Failed to send message. Please try again.",
          isError: true,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const personalCode = `//ABOUT ME

const dateOfBirth = new Date("2005-10-08");
const today = new Date();
const age = 20;
const experience = 2025 - 2022; // 3

console.log(\`I am \${age} years old\`);
console.log(\`I have been coding for the past \${experience}+ years\`);
console.log("Born to code. Built for innovation.");`;

  const projects = [
    {
      name: "Tesseract",
      description:
        "I single-handedly developed Tesseract's website, down from the intial design to the final deployment. I also integrated AI automation via Make.com",
      imageUrl: "/images/tesseract.png",
      projectUrl: "https://tesseractdev.org/",
      githubUrl: "https://github.com/MohdHassan17/tesseract",
    },

    {
      name: "Weblink Systems",
      description:
        "This project features in integration with Zoho Recruit, which allows this staffing company to directly accept applications via their website.",
      imageUrl: "/images/weblink.png",
      projectUrl: "https://nexifies.com/",
      githubUrl: "https://github.com/MohdHassan17/Nexifies",
    },

    {
      name: "Nexifies",
      description:
        "I crafted a professional and mobile-responsive website for Nexifies, showcasing their portfolio and services.",
      imageUrl: "/images/nexifies.webp",
      projectUrl: "https://weblinksys.com/",
      githubUrl: "https://github.com/MohdHassan17/weblink/",
    },
  ];

  const skills = [
    {
      backend: [
        {
          name: "Express.js",
          icon: SiExpress,
        },
        {
          name: "Node.js",
          icon: FaNode,
        },
        {
          name: "Django",
          icon: DiDjango,
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
        },
      ],
    },

    {
      frontend: [
        {
          name: "React.js",
          icon: FaReact,
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
        },
        {
          name: "TailwindCSS",
          icon: SiTailwindcss,
        },
      ],
    },

    {
      tools: [
        {
          name: "GitHub",
          icon: FaGithub,
        },

        {
          name: "VS Code",
          icon: VscVscode,
        },
        {
          name: "Postman",
          icon: SiPostman,
        },
      ],
    },
  ];
  return (
    <>
      <main className="bg-[#1a1c1b] bg-cover bg-fixed bg-[url(/images/line-vector.svg)]">
        {/* Hero Section */}

        <div className="w-full min-h-[100vh] flex items-center">
          <div className="w-[90%] lg:w-[70%] mx-auto min-h-80 bg-[#0e0f0f] border border-gray-800 rounded-xl p-6 flex gap-6 flex-col justify-between">
            <div className="  flex items-center gap-2 w-full h-10 flex-1 ">
              {colours.map((colour, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: `${colour}` }}
                ></div>
              ))}
            </div>
            <div className="w-full flex-4 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[#22c55e] font-medium text-xl">
                  $whoAmI
                </span>
                <h1 className="text-white font-bold text-4xl ">
                  <Typewriter
                    options={{
                      strings: [
                        "Hi, I am Hassan Naseer",
                        "I'm a full-stack developer.",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </h1>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[#22c55e] font-medium text-xl">
                  $languages
                </span>
                <div className="flex flex-wrap gap-3">
                  <span className="p-2 bg-[#102117] text-lg font-medium text-white rounded-lg border border-[#22c55e]">
                    Javascript
                  </span>
                  <span className="p-2 bg-[#102117] text-lg font-medium text-white rounded-lg border border-1 border-[#22c55e]">
                    Python
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}

        <div className="w-full min-h-[70vh] bg-[#0e0f0f] py-25 ">
          <div className="container mx-auto flex flex-col gap-10 px-8">
            <div className="w-full  min-h-[70vh] flex flex-col md:flex-row gap-4 rounded-lg ">
              <div className="flex-1 flex flex-col gap-6 justify-center">
                <div className="flex flex-col gap-3">
                  <span className="text-[#22c55e] font-medium text-2xl">
                    router.get(aboutMe)
                  </span>
                  <h1 className="text-white font-poppins text-4xl font-bold">
                    About Me
                  </h1>
                </div>

                <div className="">
                  <p className="text-white text-base md:text-lg font-poppins ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    minima facere sapiente dignissimos quam ab ut aperiam?
                    Iusto, quae et minima magni, ipsum nisi suscipit reiciendis,
                    praesentium doloremque laboriosam assumenda odit debitis
                    placeat corporis soluta repellendus consectetur? Est,
                    corrupti. Eveniet.
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button
                    text="Let's Connect"
                    href="https://www.linkedin.com/in/mohammed-hassan-naseer-27b2492a2/"
                    icon={FaLinkedin}
                  />
                  <Button
                    text="My Github"
                    href="https://github.com/MohdHassanNaseer17"
                    icon={FaGithub}
                  />
                </div>
              </div>
              <div className="flex-1 h-[600px]  rounded-lg overflow-hidden">
                <Editor
                  height="600px"
                  defaultLanguage="javascript"
                  defaultValue={personalCode}
                  theme="vs-dark"
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 20,
                    fontFamily: "Fira Code, monospace",
                    scrollBeyondLastLine: false,
                    wordWrap: "on", // ✅ wraps long lines instead of scrolling horizontally
                    scrollbar: {
                      vertical: "hidden", // ✅ hides vertical scrollbar
                      horizontal: "hidden", // ✅ hides horizontal scrollbar
                    },
                    overviewRulerLanes: 0, // ✅ removes right-side overview scrollbar
                    automaticLayout: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        <div className="w-full min-h-[70vh]  py-25 ">
          <div className="container mx-auto flex flex-col gap-15 px-8">
            <div className="flex flex-col gap-3">
              <span className="text-[#22c55e] font-medium text-2xl">
                export default myProjects;
              </span>
              <h1 className="text-white font-poppins text-4xl font-bold">
                My Projects
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 ">
              {/* Card */}

              {projects.map((project, index) => (
                <div
                  className="w-full h-[500px] rounded-lg bg-[#0e1414] flex flex-col"
                  key={index}
                >
                  <Image
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />

                  <div className="flex flex-col h-[300px] p-6">
                    <div className="flex flex-col gap-4 flex-grow">
                      <span className="text-[#22c55e] font-medium text-xl">
                        $id[{index + 1}]
                      </span>
                      <h2 className="font-poppins font-bold text-white text-2xl">
                        {project.name}
                      </h2>
                      <p className="font-poppins text-white/80 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 pt-6 mt-auto">
                      <Button
                        text="View Project"
                        href={project.projectUrl}
                      />
                      <Button
                        text="Github"
                        href={project.githubUrl}
                        icon={FaGithub}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}

        <div className="w-full min-h-[100vh]  flex items-center ">
          <div className="w-[90%] lg:w-[90%] mx-auto min-h-80  bg-[#0e0f0f] border border-gray-800 rounded-xl  p-6 flex gap-6 flex-col justify-between ">
            <div className="  flex items-center gap-2 w-full h-10 flex-1 ">
              {colours.map((colour, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: `${colour}` }}
                ></div>
              ))}
            </div>
            <div className="w-full flex-4 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <span className="text-[#22c55e] font-medium text-xl">
                  $skills/backend
                </span>
                <div className="flex flex-col lg:flex-row gap-4">
                  {skills[0].backend.map((skill, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-[180px] bg-[#0f2819] text-[#22c55e] border flex flex-col gap-3 justify-center items-center p-4 rounded-lg"
                    >
                      <skill.icon size={40} />
                      <span className="text-xl text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-[#22c55e] font-medium text-xl">
                  $skills/frontend
                </span>
                <div className="flex flex-col lg:flex-row gap-4">
                  {skills[1].frontend.map((skill, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-[180px] bg-[#0f2819] text-[#22c55e] border flex flex-col gap-3 justify-center items-center p-4 rounded-lg"
                    >
                      <skill.icon size={40} />
                      <span className="text-xl text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-[#22c55e] font-medium text-xl">
                  $skills/tools
                </span>
                <div className="flex flex-col lg:flex-row gap-4">
                  {skills[2].tools.map((skill, index) => (
                    <div
                      key={index}
                      className="w-[150px] h-[180px] bg-[#0f2819] text-[#22c55e] border flex flex-col gap-3 justify-center items-center p-4 rounded-lg"
                    >
                      <skill.icon size={40} />
                      <span className="text-xl text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}

        <section className="text-gray-600 body-font relative py-25 px-2">
          <div className="container px-5 py-24 mx-auto bg-[#0f1417] rounded-lg relative ">
            <div className="  flex items-center gap-2 w-full h-10 flex-1 absolute top-4 left-4 ">
              {colours.map((colour, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: `${colour}` }}
                ></div>
              ))}
            </div>
            <div className="flex flex-col text-center w-full mb-12">
              <span className="text-[#22c55e] font-medium text-2xl">
                $ contact --info
              </span>
              <h1 className="text-white  text-4xl font-bold">Let's Connect</h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-wrap -m-2"
              >
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-[#1a1c1b] rounded border border-gray-700 focus:border-[#22c55e] focus:bg-[#0f2819] focus:ring-2 focus:ring-[#22c55e] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-[#1a1c1b] rounded border border-gray-700 focus:border-[#22c55e] focus:bg-[#0f2819] focus:ring-2 focus:ring-[#22c55e] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-[#1a1c1b] rounded border border-gray-700 focus:border-[#22c55e] focus:bg-[#0f2819] focus:ring-2 focus:ring-[#22c55e] h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-[#0f2819] text-[#22c55e] px-5 py-2 border flex items-center gap-2 hover:bg-[#22c55e] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitStatus.message && (
                    <p
                      className={`text-center ${
                        submitStatus.isError ? "text-red-500" : "text-[#22c55e]"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-[#22c55e] text-center">
                  <a className="text-[#22c55e] text-base ">
                    mohdhassannaseer17@gmail.com
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
