
import React from 'react'
import './Projects.css'
import Card from './Card'

import cleen from '../assets/projects/cleen.webp'
import aci from '../assets/projects/aci.webp'
import fyle from '../assets/projects/fyle.webp'
import bytebot from '../assets/projects/bytebot.webp'


const Projects = () => {

    let myProjects = [
        {
            id: 1,
            title: "Cleen Foundation NGO",
            description: "A website for Cleen Foundation NGO using ReactJS, ExpressJs and Firebase",
            image: cleen,
            initials: "CF",
            techStack: ["ReactJS", "ExpressJS", "Firebase"],
            projectUrl: "https://aryn-rjpt.github.io/cleen-foundation-ngo/",
            githubUrl: "https://github.com/aryn-rjpt/cleen-foundation-ngo"
        },
        {
            id: 2,
            title: "Arts College of India",
            description: "A dummy college website built using Django and Bootstrap",
            image: aci,
            initials: "ACI",
            techStack: ["Django", "Bootstrap"],
            projectUrl: "https://arynrjpt.pythonanywhere.com/",
            githubUrl: "https://github.com/aryn-rjpt/Arts-College-of-India"
        },        
        {
            id: 3,
            title: "Github Repos Viewer",
            description: "A web application to view GitHub repositories using AngularJS",
            image: fyle,
            initials: "Git",
            techStack: ["AngularJS"],
            projectUrl: "https://aryn-rjpt.github.io/Github-Repos/",
            githubUrl: "https://github.com/aryn-rjpt/fyle-internship-challenge-23"
        },
        {
            id: 4,
            title: "Discord ByteBot",
            description: "A discord bot to track my societies' members and activities",
            image: bytebot,
            initials: "DB",
            techStack: ["JavaScript", "Discord.js"]
        },
    ]

    return (
        <div id='proj-container'>
            <h1>Look What I've worked on!</h1>

            <div id='projects'>

                { myProjects.map(project => (
                    <Card key={project.id} project={project} />
                )) }                

            </div>
        </div>
    )
}

export default Projects