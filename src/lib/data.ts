import React from 'react';
import { LiaCertificateSolid } from "react-icons/lia";
import { FaComputer } from "react-icons/fa6";

export const imgLinks = {
    linkedin: 'https://media.licdn.com/dms/image/D5603AQEVzpy3mt6Vsg/profile-displayphoto-shrink_800_800/0/1704899712443?e=1718841600&v=beta&t=nD_lhs8yVLPkuX9Dstfv1EuiIWJoSglYQnun4EzcBFY',
}

export const contactlLinks = [
    {
        name: "GitHub",
        url: "https://github.com/codewithMafuz"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mafuzur-rahman-126559215/",
    },
    {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMVlCVlQjgLrlKjxlrvWgcMQHrvBNMHMgqNMxzgsWssMRXppxVgdvzbcTblCRGbSdnksQKq",
    },
    {
        name: "Email",
        url: "contact.codewithmafuz@gmail.com",
    },
    {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~017996df5da0669177"
    }
] as const

export const links = [
    {
        name: 'home',
        hash: '#home',
    },
    {
        name: 'about',
        hash: '#about',
    },
    {
        name: 'projects',
        hash: '#projects',
    },
    {
        name: 'skills',
        hash: '#skills',
    },
    {
        name: 'experience',
        hash: '#experience',
    },
    {
        name: 'contact',
        hash: '#contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'Completed FullStack Certificate',
        location: 'At Online Platform',
        description: 'I earned certificate of full stack development certificate for the react full-stack project',
        icon: React.createElement(LiaCertificateSolid),
        date: '2024',
        url: null,
    },
    {
        title: 'Full-Stack Developer',
        location: 'At Freelancing',
        description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and others as my skills. I'm open to full-time opportunities.",
        icon: React.createElement(FaComputer),
        date: '2024 - present',
        url: "https://www.upwork.com/freelancers/~017996df5da0669177",
    },
] as const;

export const projectsData = [
    {
        id: 2,
        title: 'Movbixer',
        description: 'It is a web app named Movbixer. Its a entertainment app to show Movies, TV Shows, Casts and others by using the popular Movie DB API',
        tags: ['HTML/CSS/JavaScript', 'React', 'Tailwind', 'Redux', 'React libraries'],
        imageUrl: '/project-movbixer.png',
        projectUrl: "https://movbixer.vercel.app/",
    },
    {
        id: 3,
        title: 'Auth Demo App',
        description: 'A completely full stack custom web app mainly focused on authenticatin system using node express.js and mongodb on backend, Other feature have in this app like showcase user skills and feed.',
        tags: ['HTML/CSS/JavaScript', 'React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: '/project-auth-demo.png',
        projectUrl: "https://auth-frontend-demo.vercel.app/",
    },
];

export const skillsData = [
    { name: 'HTML', description: "Its the core mandatory tech in web" },
    { name: 'CSS', description: "Its used for styling web pages" },
    { name: 'JavaScript', description: "Its used for client-side scripting in web development, its the heart of browser" },
    { name: 'TypeScript', description: "I use and prefer using TypeScript in some projects for its static typing benefits" },
    { name: 'Tailwind', description: "I prefer using Tailwind CSS for rapid UI development, its the popular css framework nowadays" },
    { name: 'React', description: "Its on of the popular library of javascript now in the world, to build user interfaces" },
    { name: 'Redux', description: "I  use Redux for managing state in my JavaScript apps" },
    { name: 'Next.js', description: "Next.js is a powerful framework for building server-rendered applications, SEO optimized project etc." },
    { name: 'Node.js', description: "Node.js for server-side development" },
    { name: 'Express', description: "Express.js is the popular light-weight, minimal & flexible web application framework used my millions of companies in the world" },
    { name: 'MongoDB', description: "I use MongoDB as my document-oriented NoSQL database" },
    { name: 'Prisma', description: "I use Prisma sometimes as my database toolkit for TypeScript and Node.js" },
    { name: 'GraphQL', description: "Its used in GraphQL as a query language for my API" },
    { name: 'Apollo', description: "I use Apollo sometimes for comprehensive GraphQL API development" },
    { name: 'MySQL', description: "I use MySQL as my relational database management system in projects sometimes" },
    { name: 'Git & GitHub', description: "Git & Github for version control in my projects" },
    { name: 'python', description: "I learnt python pretty much to understand how high level language and its class & object systems works and how used" },
    { name: 'Framer Motion', description: "I use Framer Motion for production-ready motion in my React app" },
    { name: 'React & Node Libraries', description: "I used many popular react and node libraries in my projects, but I can learn new library asap by show its docs if needed in future" },
    { name: 'Constant Learner', description: "I enjoy improving my skills and gain knowledge of latest & modern technologies to keep me update" },
    { name: 'Problem Solving', description: "I like to figure our problems and fix it, so that I can improve myself more" },

];

