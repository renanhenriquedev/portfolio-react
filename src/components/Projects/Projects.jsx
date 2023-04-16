import React from "react";
import styles from './Projects.module.css'
import pixelArt from '../../imagens/pixel-art.png'
import list from '../../imagens/list.png'
import burguer from '../../imagens/burguer.png'

import ItemProjects from "../ItemProjects/ItemProjects";
import data from "./Projects.json"


function Projects() {
 
    return (
        <main>
            {data.project.map((item, index) => (
                <ItemProjects
                key={index}
                    link={item.link}
                    image={item.image}
                    text={item.text}
                    github={item.github}
                    deploy={item.deploy}
                ></ItemProjects>
            ))}
        </main>
    )
}

export default Projects;