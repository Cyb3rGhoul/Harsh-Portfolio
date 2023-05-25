import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Writter",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company_name: "Teachnook",
      icon: meta,
      iconBg: "#383E56",
      date: "April 2023 -  May 2023",
      points: [
        "Training and internship as a Fullstack Developer.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products and websites.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "Hack2Skill (The Socials)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Jul 2023",
      points: [
        "ContriButing in open-sorce Projects.",
        "Collaborating with other developers to create best projects.",
        
      ],
    },

    

    {
      title: "Collaborater",
      company_name: "Omdena",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Contributor to Omdena's New Delhi chapter.",
        "I will work on a project Identifying cough severity due to Air pollution, using various AL & Machine Learning Technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Content Editor and Writer",
      company_name: "TedxVITBhopal",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Core Member of content and editorial team.",
        "Wrote Many Articles for the TEDx Medium Page.",
        "Worked with Different Teams to Organise Ted talks.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "No Testimonial Yet",
      name: "User",
      designation: "Degination",
      company: "Company",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "Web-based platform that allows users to search and see the current Weather condition of the place by using Weather API, providing a convenient and efficient solution for Weather report needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "weatherapi",
          color: "white-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Cyb3rGhoul/Weather-App",
    },
    {
      name: "ChatGPT clone",
      description:
        "Web application that almost Perfrect UI clone of ChatGPT with all the functionality of it. With the use of OpenAI API it gan gentrate response for the text you'll enter.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "openapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/Cyb3rGhoul/ChatGPT-clone",
    },
    {
      name: "Data Science Club Website",
      description:
        "A comprehensive University Club website that allows users to register for events, participate in online hackathons, and get in touch with the team.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Cyb3rGhoul/ds-club-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };