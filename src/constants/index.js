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
    carrent,
    jobit,
    tripguide,
    threejs,
    Computing,
    contract,
    design,
    development,
    wordpress
  } from "../assets";
  
  export const navLinks = [
    {
      id: 'home',
      title: 'Home',
    },
    {
      id: "about",
      title: "About Us",
    },
    { 
      id: 'services',
      title : 'Services',
    },
    {
      id: "team",
      title: "Team",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const services = [
    {
      title: "Smart Contracts",
      icon: contract,
      iconBg: "#383E56",
      points: [
        'Writing Smart Contracts in Solidity for EVM based Chains',
      ],
    },
    {
      title: "API Development",
      icon: development,
      iconBg: "#E6DEDD",
      points: [
        'We create APIs in different languages as per requirements. Prefered language is NodeJS/NestJS',
      ],
    },
    {
      title: "UI / UX Design",
      icon: design,
      iconBg: "#383E56",
      points: [
        "We can design UI /UX in Figma and Adobe",
      ],
    },
    {
      title: "Web Development",
      icon: development,
      iconBg: "#E6DEDD",
      points: [
        "We create web designs in HTML, CSS, JS, Tailwind and develop in ReactJS",
      ],
    },
    {
      title: "Cloud Computing",
      icon: Computing,
      iconBg: "#E6DEDD",
      points: [
        "We can help setup cloud infrastructures on AWS, Azure, Google Cloud, etc.",
      ],
    },
    {
      title: "WordPress",
      icon: wordpress,
      iconBg: "#E6DEDD",
      points: [
        "We develop wordpress projects including plugins development",
      ],
    },
  ];
  
  const team = [
    {
      image: 'https://nambitech.com/assets/images/rahul.png',
      name: "RAHUL SINGH",
      designation: "CO-FOUNDER",
      Head: "Head Of Technology",
      Link: 'https://www.linkedin.com/in/rahul-singh-ba9143101/"',
      // testimonial:
      //   "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    },
    {
      image: "https://nambitech.com/assets/images/rakesh.jpeg",
      name: "RAKESH YADAV",
      designation: "CO-FOUNDER",
      Head: "CHIEF ARCHITECT",
      Link:"https://www.linkedin.com/in/yadurakesh/",
      // testimonial:
      //   "I've never met a web developer who truly cares about their clients' success like Rick does.",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, services, team, projects };
  