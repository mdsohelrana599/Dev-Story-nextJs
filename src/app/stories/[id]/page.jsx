import React from "react";
import Link from "next/link";

const StoryDetailspage = async ({ params }) => {
  const { id } = await params;
  const DevStroyData = [
    {
      id: 1,
      name: "Md Sohel Rana",
      designation: "Full Stack Developer",
      company: "IT Solutions", // You can update the company name as needed
      experience: "3+ years", // You can adjust the years of experience
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      story:
        "Sohel started his programming journey with a deep curiosity about how scalable web applications work under the hood. He began with frontend fundamentals before diving deep into backend architecture. Through continuous practice, building end-to-end projects, and solving real-world challenges, he mastered modern full-stack technologies. His dedication to writing clean code and optimizing performance quickly earned him recognition among his peers.",
      about:
        "Sohel is a passionate full-stack developer from Bangladesh who loves building robust, scalable, and user-centric web applications. He thrives on bridging the gap between sleek frontend interfaces and powerful backend systems. Outside of coding, he loves exploring new tech stacks and mentoring aspiring developers. His long-term goal is to architect large-scale enterprise solutions and lead open-source initiatives.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    
    {
      id: 2,
      name: "Sara Ahmed",
      designation: "Full Stack Developer",
      company: "BrightByte Labs",
      experience: "4 years",
      skills: ["Node.js", "Express", "MongoDB", "React", "Docker"],
      story:
        "Sara began her journey with basic HTML and CSS tutorials. She enjoyed making designs come alive in the browser. Later, JavaScript caught her interest and she spent months mastering it. After learning React, she moved into Node.js and database management. Building her first MERN application became a major milestone in her career.",
      about:
        "Sara is a dedicated full-stack developer who specializes in creating scalable and maintainable applications. She enjoys solving complex problems and improving user experiences. Her teammates describe her as curious and persistent. Outside work, she mentors junior developers and participates in hackathons. Her goal is to become a software architect.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 3,
      name: "Rahul Das",
      designation: "Backend Engineer",
      company: "CodeCraft Systems",
      experience: "2 years",
      skills: ["Node.js", "PostgreSQL", "Redis", "REST API", "TypeScript"],
      story:
        "Rahul started his learning journey by solving programming logic problems. He quickly became fascinated by backend engineering and how data flows through applications. He learned JavaScript and later moved to TypeScript. Building APIs and designing databases became his passion. Redis caching helped him understand performance optimization.",
      about:
        "Rahul is an early-career backend engineer who loves building reliable and secure server systems. He enjoys working with databases, caching layers, and cloud deployment. His strongest skill is breaking complex problems into manageable parts. He also enjoys teaching beginners about backend fundamentals.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Maya Siddiqui",
      designation: "UI/UX Focused Frontend Developer",
      company: "PixelForge Studio",
      experience: "3.5 years",
      skills: ["Figma", "React", "Tailwind", "GSAP", "TypeScript"],
      story:
        "Maya started her career as a designer but soon realized she wanted her designs to become real interactive experiences. She taught herself HTML, CSS, and JavaScript. After learning React, she focused on animations and micro-interactions. Tailwind CSS helped her build faster and more consistently.",
      about:
        "Maya is a frontend developer with a strong sense of design and a passion for interactive user experiences. She combines aesthetics with technology to create responsive interfaces. Her UI/UX background helps her understand accessibility and visual hierarchy. She enjoys experimenting with animation libraries.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 5,
      name: "Zahidul Karim",
      designation: "MERN Stack Developer",
      company: "DevOrbit Labs",
      experience: "5 years",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Redux"],
      story:
        "Zahidul started as a self-taught developer with a strong interest in JavaScript. He practiced daily by building small tasks and mini-projects. After learning React, he moved to full-stack development using Node.js and MongoDB. His major breakthrough came when he built an LMS platform prototype.",
      about:
        "Zahidul is an experienced MERN stack developer who enjoys architecting robust applications. He has worked on dashboards, LMS platforms, eCommerce applications, and real-time features. His strength lies in understanding the complete application flow. He hopes to lead a software engineering team in the future.",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 6,
      name: "Nusrat Jahan",
      designation: "React Developer",
      company: "WebPulse Technologies",
      experience: "2.5 years",
      skills: ["React", "JavaScript", "Firebase", "Tailwind CSS", "Git"],
      story:
        "Nusrat discovered programming while studying computer science. She started with HTML and CSS before becoming interested in JavaScript. React completely changed how she thought about web applications. She built several small projects before creating her first production-ready application.",
      about:
        "Nusrat is a creative React developer who enjoys building modern and responsive web applications. She is interested in component architecture and frontend performance. She regularly practices coding challenges and follows modern web development trends.",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 7,
      name: "Tanvir Hasan",
      designation: "Next.js Developer",
      company: "CloudEdge Software",
      experience: "3 years",
      skills: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
      story:
        "Tanvir began with vanilla JavaScript and gradually moved into React. After building several React applications, he discovered Next.js and became interested in server-side rendering. He learned TypeScript and database integration to build complete applications.",
      about:
        "Tanvir is a Next.js developer focused on creating fast and scalable applications. He enjoys working with TypeScript, databases, and modern deployment platforms. His goal is to become a senior full-stack engineer.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 8,
      name: "Ayesha Rahman",
      designation: "Frontend Engineer",
      company: "CodeWave Ltd",
      experience: "3 years",
      skills: ["React", "Vue.js", "JavaScript", "Sass", "Jest"],
      story:
        "Ayesha started programming after creating a simple personal website. She became fascinated by how code could transform a design into an interactive experience. She learned JavaScript deeply and explored multiple frontend frameworks before specializing in React.",
      about:
        "Ayesha is a frontend engineer who loves clean UI and maintainable code. She is passionate about testing and accessibility. She enjoys collaborating with designers and backend engineers to build polished products.",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 9,
      name: "Fahim Chowdhury",
      designation: "Backend Developer",
      company: "DataBridge Systems",
      experience: "4 years",
      skills: ["Node.js", "Express", "MySQL", "Docker", "AWS"],
      story:
        "Fahim started with frontend development but became curious about what happens behind the browser. He learned Node.js and Express and started building REST APIs. Database optimization and cloud deployment later became important parts of his learning journey.",
      about:
        "Fahim is a backend developer focused on reliable APIs and scalable server architecture. He enjoys working with databases and cloud technologies. He spends his free time learning system design and DevOps.",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
      id: 10,
      name: "Mehjabin Akter",
      designation: "Software Engineer",
      company: "InnovateX Labs",
      experience: "5 years",
      skills: ["JavaScript", "React", "Node.js", "GraphQL", "MongoDB"],
      story:
        "Mehjabin started coding during college and initially found programming difficult. Instead of giving up, she created a daily learning routine. She built dozens of small applications and gradually became comfortable with frontend and backend technologies.",
      about:
        "Mehjabin is a software engineer who enjoys designing complete web solutions. She has experience with frontend, backend, APIs, and databases. She believes strong fundamentals are more important than simply learning new tools.",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      id: 11,
      name: "Sakib Ahmed",
      designation: "Full Stack Engineer",
      company: "StackWorks",
      experience: "4.5 years",
      skills: ["React", "Node.js", "MongoDB", "Next.js", "AWS"],
      story:
        "Sakib started his career by building small websites for local businesses. As his confidence grew, he learned React and Node.js. His first full-stack project taught him authentication, database management, deployment, and API architecture.",
      about:
        "Sakib is a full-stack engineer who enjoys building applications from the ground up. He focuses on clean architecture and scalable solutions. He is also interested in cloud computing and distributed systems.",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      id: 12,
      name: "Raisa Karim",
      designation: "Frontend Engineer",
      company: "DesignCode Studio",
      experience: "2 years",
      skills: ["React", "Tailwind CSS", "Framer Motion", "Figma", "JavaScript"],
      story:
        "Raisa started with graphic design before moving into web development. She learned HTML and CSS to understand how websites were built. JavaScript and React allowed her to turn her designs into interactive experiences. She became especially interested in animations.",
      about:
        "Raisa combines design knowledge with frontend development skills. She enjoys building beautiful interfaces with smooth animations. Her goal is to become a product-focused engineer who understands both design and technology.",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      id: 13,
      name: "Imran Kabir",
      designation: "DevOps Engineer",
      company: "CloudNova",
      experience: "6 years",
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "CI/CD"],
      story:
        "Imran became interested in servers while working on a backend project. He started learning Linux and cloud infrastructure. Docker made deployment easier for him, and later he explored Kubernetes and CI/CD pipelines.",
      about:
        "Imran is a DevOps engineer who specializes in automation, cloud infrastructure, and deployment systems. He enjoys making development workflows faster and more reliable. He regularly studies cloud architecture and infrastructure automation.",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      id: 14,
      name: "Tania Sultana",
      designation: "JavaScript Developer",
      company: "LogicLoop",
      experience: "3 years",
      skills: ["JavaScript", "React", "Redux", "REST API", "Git"],
      story:
        "Tania became interested in programming after solving her first JavaScript problem. She practiced algorithms and DOM manipulation every day. React became her next major step, and she gradually learned state management and API integration.",
      about:
        "Tania is a JavaScript developer who enjoys solving problems and creating interactive applications. She believes regular practice is the best way to improve programming skills. She hopes to become a senior frontend engineer.",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
      id: 15,
      name: "Rafiul Islam",
      designation: "Mobile App Developer",
      company: "AppSphere",
      experience: "3.5 years",
      skills: ["React Native", "JavaScript", "Firebase", "Expo", "Redux"],
      story:
        "Rafiul started as a web developer but wanted to build applications for mobile devices. He discovered React Native and enjoyed using his existing React knowledge to create mobile apps. His first successful app motivated him to explore mobile architecture.",
      about:
        "Rafiul is a mobile application developer who creates cross-platform apps using React Native. He enjoys working with APIs, authentication, and mobile UI patterns. His goal is to build products used by millions of users.",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    {
      id: 16,
      name: "Samia Noor",
      designation: "Software Developer",
      company: "FutureStack",
      experience: "4 years",
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
      story:
        "Samia began with simple programming exercises and slowly moved toward application development. She discovered TypeScript while working on a React project and immediately appreciated its type safety. Later, she learned backend development and database design.",
      about:
        "Samia is a software developer interested in building reliable and maintainable systems. She enjoys TypeScript and strongly believes in writing clean, understandable code. She also likes mentoring students who are beginning their programming journey.",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
      id: 17,
      name: "Nayeem Hasan",
      designation: "API Developer",
      company: "ServerFlow",
      experience: "3 years",
      skills: ["Node.js", "Express", "REST API", "MongoDB", "JWT"],
      story:
        "Nayeem became interested in backend development after building his first frontend application. He wanted to understand how authentication and data storage worked. He learned Node.js, Express, MongoDB, and JWT authentication through several personal projects.",
      about:
        "Nayeem is an API developer focused on secure and efficient backend services. He enjoys designing REST APIs and working with authentication systems. He continues to study system architecture and database optimization.",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
    },
    {
      id: 18,
      name: "Jannatul Ferdous",
      designation: "Web Developer",
      company: "DigitalCraft",
      experience: "2.5 years",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      story:
        "Jannatul started her web development journey by creating simple static pages. She gradually learned responsive design and JavaScript. React became the technology that helped her build more dynamic applications. She now enjoys creating modern responsive websites.",
      about:
        "Jannatul is a web developer who loves creating clean and responsive websites. She focuses on frontend development and enjoys learning modern CSS techniques. Her goal is to become a professional full-stack developer.",
      image: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
      id: 19,
      name: "Mahmudul Hasan",
      designation: "Cloud Engineer",
      company: "SkyNet Technologies",
      experience: "5 years",
      skills: ["AWS", "Docker", "Terraform", "Linux", "Kubernetes"],
      story:
        "Mahmudul became interested in cloud technology while deploying his first web application. He wanted to understand servers, networking, and infrastructure better. He learned AWS and Docker before exploring Kubernetes and infrastructure automation.",
      about:
        "Mahmudul is a cloud engineer focused on infrastructure, automation, and reliable deployments. He enjoys solving infrastructure problems and learning new cloud technologies. His long-term goal is to become a cloud solutions architect.",
      image: "https://randomuser.me/api/portraits/men/95.jpg",
    },
    {
      id: 20,
      name: "Anika Rahman",
      designation: "Full Stack JavaScript Developer",
      company: "DevSphere Technologies",
      experience: "4 years",
      skills: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
      story:
        "Anika started her development journey by learning HTML and CSS from online tutorials. JavaScript helped her understand programming fundamentals. She later learned React and Next.js before moving into backend development with Node.js and MongoDB. Building a complete SaaS project became her biggest learning milestone.",
      about:
        "Anika is a full-stack JavaScript developer who enjoys building modern web applications. She works across frontend, backend, databases, and deployment. She is passionate about clean architecture and developer experience. Her goal is to build products that solve meaningful real-world problems.",
      image: "https://randomuser.me/api/portraits/women/84.jpg",
    },
    {
      id: 21,
      name: "Arman Hossain",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 years",
      skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      story:
        "Arman started learning web development during his university days. He struggled at first with JavaScript fundamentals but stayed consistent. Every day he solved one problem and built small UI components. After mastering React, he transitioned to Next.js for better performance and SEO. His turning point came when he built a dashboard project that impressed his seniors.",
      about:
        "Arman is a passionate frontend developer from Bangladesh who loves building seamless and interactive user interfaces. He believes in learning by doing and enjoys experimenting with modern React technologies. Outside coding, he writes technical blogs and helps beginners. His long-term goal is to become a full-stack developer and contribute to open-source projects.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  ];

  const story = DevStroyData.find((story) => story.id == id);
  if (!story) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-2xl font-bold mb-4">Story Not Found</h2>
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-2.5 text-slate-900 font-semibold text-sm hover:bg-indigo-100 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-slate-950 px-4 py-12 md:px-8 rounded-2xl lg:px-12">
      <div className="max-w-9xl mx-auto relative overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10  bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
        {/* Glow Effects matching Banner */}
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />

        {/* Top Section */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <img
            src={story.image}
            alt={story.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-indigo-500/40 shadow-xl"
          />
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {story.name}
            </h1>
            <p className="text-slate-300 font-medium text-sm sm:text-base">
              {story.designation}
            </p>
            <p className="text-indigo-400 font-semibold text-sm">
              {story.company}
            </p>
            <span className="inline-block mt-2 rounded-full bg-white/10 px-3 py-1 text-xs text-indigo-200 border border-white/10 backdrop-blur-md">
              Experience: {story.experience}
            </span>
          </div>
        </div>

        {/* Story */}
        <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
            📖 Learning Story
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {story.story}
          </p>
        </div>

        {/* About */}
        <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
            💡 About Developer
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {story.about}
          </p>
        </div>

        {/* Skills */}
        <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
            ⚡ Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {story.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Back Link Button */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex justify-center sm:justify-start">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 text-xs sm:text-sm shadow-xl transition-all duration-300 hover:bg-indigo-100 hover:shadow-indigo-500/20 inline-flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400">
              <span>←</span> Back to All Stories
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailspage;
