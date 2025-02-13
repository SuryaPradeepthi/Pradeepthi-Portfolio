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
  username: "Surya Pradeepthi Chakka",
  title: "Hi all, I'm Pradeepthi",
  subTitle: emoji(
    "A passionate DevOps and Front-End Developer 🚀 with experience in building Web applications using JavaScript / Reactjs / Python, along with some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1F9EbiG11TqSnS5Vb6i1OG4D3pnhR7fdu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SuryaPradeepthi",
  linkedin: "https://www.linkedin.com/in/suryapradeepthi-chakka/",
  gmail: "chakkasuryapradeepthi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Implement continuous integration and deployment (CI/CD) practices for streamlined development"),
    emoji("⚡ Leverage a range of frameworks and tools such as Docker, Jenkins, and AWS for seamless application development")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },

  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "jenkins",
    fontAwesomeClassname: "fab fa-jenkins"
  },
  {
    skillName: "kubernetes",
    fontAwesomeClassname: "fab fa-kubernetes"
  },
  {
    
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-ansible"
    
  },
  {
    
    skillName: "Terraform",
    fontAwesomeClassname: "fab fa-terraform"
  
},
{
    
  skillName: "Java",
  fontAwesomeClassname: "fab fa-java"

},
{
    
skillName: "Mongodb",
fontAwesomeClassname: "fab fa-mongo"

},
{
    
skillName: "C",
fontAwesomeClassname: "fab fa-c"

},
{
    
skillName: "Bootstrap",
fontAwesomeClassname: "fab fa-bootstrap"

}
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Auburn University",
      logo: require("./assets/images/Auburn.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2023 - Dec 2024",
      
    },
    {
      schoolName: "Sathyabama University",
      logo: require("./assets/images/Sathyabama_logo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2016 - May 2020",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Auburn University",
      companylogo: require("./assets/images/Auburn.png"),
      date: "Jun 2023 – Present",
      desc:"This research involves supporting the development and testing of Advanced Learning Technologies,including AR/VR, mobile applications, and tools for health, communication disorders, and pharmacy, with tasks related to coding, testing, user experience, and publications."
      
    },
    {
      role: "Junior Devops Engineer",
      company: "Kyndryl",
      companylogo: require("./assets/images/kyndryl.png"),
      date: "Jun 2020 – Dec 2022",
      desc: "Experienced in leveraging tools like Ansible for configuration management and automation, AWS services for infrastructure and CI/CD pipelines, and Kubernetes for application deployment and monitoring. Expertise includes implementing security practices with HashiCorp Vault, integrating API-based systems, and optimizing application performance through advanced monitoring and automated notifications."
    },
    {
      role: "Software Engineer Intern",
      company: "Third Binary IT Solutions",
      companylogo: require("./assets/images/ThirdBinary.png"),
      date: "Mar 2019 – May 2020",
      desc: "Engineered a CI/CD pipeline with AWS CodeBuild, CodePipeline, and CodeDeploy, deployed serverless infrastructure using AWS EKS and Fargate, and developed Kubernetes monitoring with Prometheus/Grafana, alongside securing secrets with HashiCorp Vault and building automated AWS-based systems."
    },
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS THAT I WORKED ON",
  projects: [
    {
      image: require("./assets/images/end-to-end-tests.png"),
      projectName: "End-to-End-Kubernetes-Three-Tier-DevSecOps-Project",
      projectDesc: "Three-Tier Web Application Deployment on AWS EKS using AWS EKS, ArgoCD, Prometheus, Grafana, and Jenkins",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SuryaPradeepthi/SuryaPradeepthi-End-to-End-Kubernetes-Three-Tier-DevSecOps-Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wether.jpg"),
      projectName: "Weather Dashboard",
      projectDesc: "Developed a weather dashboard that integrates with a weather API to fetch real-time data",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/SuryaPradeepthi/weather-dashboard.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
  
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "Azure Microsoft Certified Fundamentals(AZ-900)",
      image: require("./assets/images/Azure.png"),
      imageAlt: "Azure Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1-pb3c_xOeOWKnfpp9z0lbicl42_LesHC/view?usp=sharing"
        },
      ]
    },
    {
      title: "Codecademy SQL Certification",
      image: require("./assets/images/codecademy.png"),
      imageAlt: "codecademy certificate",
      footerLink: [
        {
          name: "Completion Certificate",
          url: "https://drive.google.com/file/d/1uYp3H7uwPw-w1KbR-9dIlSrZCCytXr0W/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: require("./assets/images/aws.jpg"),
      imageAlt: "aws",
      footerLink: [
        {
          name: "Certificate",
          url: " "
        }
      ]
    },


    {
      title: "HackeRank SQL Basic Certificate",
      image: require("./assets/images/Hacker.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {name: "Certification", 
          url: "https://drive.google.com/file/d/1dtI4BbRPt_uqX2F9bEf-igdb5C6fVmoQ/view?usp=sharing"
        },
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+1 334-849-0754",
  email_address: "chakkasuryapradeepthi@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects, // This should come before openSource
  openSource,  // This will now appear below bigProjects
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  contactInfo,
  isHireable,
  resumeSection
};