/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Darshan Kumbhar",
  title: "Hi all, I'm Darshan",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 skilled in JavaScript, React, Node.js, Express.js, MongoDB and Core Java. I love building modern web applications and solving real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Darshan-k3024",
  linkedin: "",
  gmail: "darshankumbhar84@gmail.com",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Developer who builds responsive and scalable web applications",

  skills: [
    emoji("⚡ Develop responsive front-end interfaces using React and JavaScript"),
    emoji("⚡ Build backend APIs using Node.js and Express.js"),
    emoji("⚡ Work with MongoDB databases and REST APIs")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "NPM", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "ExpressJS", fontAwesomeClassname: "fas fa-server" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Core Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Master of Computer Applications (MCA)",
      logo: require("./assets/images/dypatil_uni_logo.png"),
      subHeader: "MCA",
      duration: "2024 - 2026",
      desc: "Currently pursuing MCA and focusing on Full Stack Development."
    },
    {
      schoolName: "Bachelor of Computer Applications (BCA)",
      logo: require("./assets/images/download.jpg"),
      subHeader: "BCA",
      duration: "2021 - 2024",
      desc: "Studied programming fundamentals, databases and web technologies."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Intern",
      company: "Prodigy Infotech",
      companylogo: require("./assets/images/prodigiy (1).jpg"),
      date: "July 2025 – Aug 2025",
      desc: "Worked on web development projects and improved frontend and backend skills."
    }
  ]
};

// Open Source Projects
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects
// const bigProjects = {
//   title: "Projects",
//   subtitle: "Some projects I have worked on",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "AI Code Reviewer",
//       projectDesc:
//         "A web application that reviews code and provides suggestions using AI.",
//       footerLink: [
//         {
//           name: "GitHub",
//           url: "https://github.com/Darshan-k3024"
//         }
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Recipe Search App",
//       projectDesc:
//         "A full stack recipe search application with login, comments and likes.",
//       footerLink: [
//         {
//           name: "GitHub",
//           url: "https://github.com/Darshan-k3024"
//         }
//       ]
//     }
//   ],
//   display: true
// };

// Achievement Section (disabled)
const achievementSection = {
  display: false
};

// Talks Section (disabled)
const talkSection = {
  display: false
};

// Podcast Section (disabled)
const podcastSection = {
  display: false
};

// Blog Section
const blogSection = {
  display: false
};

const bigProjects={
  display:false,
}
// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+918421347323",
  email_address: "darshankumbhar84@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};