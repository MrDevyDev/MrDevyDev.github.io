import { MdPhonelink } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { IoSpeedometerOutline } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { FaBug } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import React from "react";

import iflix_figma from "./Photos/iflix figma.jpg";
import news_figma from "./Photos/news figma.png";
import ecommerce_figma from "./Photos/ecommerce figma.jpg";
import weather_app from "./Photos/project_weather.jpg";
import calculator from "./Photos/React Calculator.jpg";
import dictionary from './Photos/dictionary.jpg'
import github_user from './Photos/search_github1.jpg'
import todo_app from './Photos/todo picture.jpg'
import random_password from './Photos/random password.jpg'
import quiz_app from './Photos/quiz app.jpg'
let serviceData = [
  {
    service_icon: <CgWebsite className="service_icon" />,
    name: "Website Development",
    description:
      "Design and develop responsive and visually appealing websites.Implement user interfaces based on provided design mockups.Ensure cross-browser compatibility and optimize performance. ",
  },
  {
    service_icon: <MdPhonelink className="service_icon" />,
    name: "Responsive Web Design",
    description:
      "Ensure that websites are optimized for various devices and screen sizes, providing a seamless experience across desktops, tablets, and mobile devices.",
  },
  {
    service_icon: <SiPostman className="service_icon" />,
    name: "Integration of Third-Party APIs",
    description:
      "Integrate third-party APIs to add additional functionality or features to a website, such as payment gateways, social media integrations, or data analytics.",
  },
  {
    service_icon: <IoSpeedometerOutline className="service_icon" />,
    name: "Performance Optimization",
    description:
      "Optimize websites for speed and performance by addressing issues such as code splitting, lazy loading, and image optimization",
  },
  {
    service_icon: <FaBug className="service_icon" />,
    name: "Bug Fixing",
    description:
      "Identify and resolve bugs, glitches, and performance issues in existing websites, ensuring a smooth and error-free user experience.",
  },
  {
    service_icon: <FiShoppingBag className="service_icon" />,
    name: "E-Commerce Website Development",
    description:
      "Design and develop e-commerce websites with a focus on user-friendly interfaces, secure payment gateways, and seamless shopping experiences.",
  },
];

 const projectData = [
  {
    title: "Coming soon",
    img: iflix_figma,
    github: "https://github.com/MrDevyDev",
    url: "https://github.com/MrDevyDev",
  },
  {
    title: "Coming soon",
    img: ecommerce_figma,
    github: "https://github.com/MrDevyDev",
    url: "https://github.com/MrDevyDev",
  },
]; 
export { serviceData, projectData };
