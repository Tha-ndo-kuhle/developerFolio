/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thandokuhle Mdlalose",
  title: "Hi all, I'm Kuhle",
  subTitle: emoji(
    "Final-Year IT Student | Passionate About Software Dev, Cybersecurity & Big Data | Exploring Astroinformatics 🌌"
  ),
  resumeLink: "C:\Users\Kuhle\developerFolio\src\containers\greeting\resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Tha-ndo-kuhle",
  linkedin: "https://www.linkedin.com/in/thandokuhle-m-4773251b3/",
  gmail: "kuhlem80@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "🌸 I’m not just a coder — I’m a builder of ideas, a problem solver, and a people-first tech enthusiast. From designing elegant solutions to facilitating mental health events, I bring heart and logic to everything I do. Whether it's debugging code or uplifting a community, I always show up with curiosity and care.",
  skills: [
    "💻 Developing full-stack applications using C#, Java, and SQL",
    "🎨 Creating clean, accessible front-end interfaces with HTML, CSS & JavaScript",
    "🛡️ Applying cybersecurity best practices & building ethically conscious systems",
    "🌌 Exploring the intersection of astronomy and data science (Astroinformatics)",
    "🤝 Collaborating in Agile teams using Git & GitHub workflows",
    "🧠 Leading wellness & mental health workshops with intention and empathy",
    "🎤 Public speaking, mentoring, and turning complex ideas into accessible stories",
    "🚀 Lifelong learner always chasing knowledge, creativity, and community",
  ],

  softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "vscode-icons:file-type-html",
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "vscode-icons:file-type-css",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript",
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "logos:mysql",
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "logos:git-icon",
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "akar-icons:github-fill",
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "devicon:csharp",
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "logos:c-plusplus",
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "devicon:java",
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "logos:python",
  },
],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "North-West University",
      logo: require("./assets/images/NWULogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
    },
    {
      schoolName: "Springs Girls High School",
      logo: require("./assets/images/SGHSLogo.png"),
      subHeader: "High School Career",
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Volunteered to job shadow the IT Support Team",
      company: "BASF",
      companylogo: require("./assets/images/BASFLogo.png"),
      date: "08 June 2024 – 12 June 2024",
      desc: "Oversaw daily IT Support operations.",
    },
    {
      role: "Mental Health and Welbeing Mentor",
      company: "CampusKey Student Accomodation",
      companylogo: require("./assets/images/CKLogo.png"),
      date: "January 2024 – July 2024",
      desc: "Mental Health ambassador, student life liaison, Mental Health events facilitator."
    },
  ]
};

// Tech Stack Section
// This section is used to show your skills in a bar chart format
// Set viewSkillBars to true to show this section
// Set viewSkillBars to false to hide this section
// You can also change the skills and their progress percentage
// Make sure to include correct Font Awesome Classname to view your icon

const techStack = {
  viewSkillBars: false, // Set to false if you don’t want to show the section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
  animation: require("./assets/lotties/skills.json"),
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Tha-ndo-kuhle",
  showGithubProfile: "true", // Show user's GitHub profile
  display: false // Set false to hide this section
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27 60 388 8263 ",
  email_address: "kuhlem80@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  techStack,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
