import React from "react";
import styles from './Projects.module.css'
import pixelArt from '../../imagens/pixel-art.png'
import list from '../../imagens/list.png'
import burguer from '../../imagens/burguer.png'

function Projects() {
    const projects = [
        {
            link: 'https://github.com/renanhenriquedev/Pixel-Art',
            image: pixelArt,
            text: 'Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de pixel art para fazer os seus desenhos.',
            github: 'https://github.com/renanhenriquedev/Pixel-Art',
            deploy: 'https://pixelart-project.surge.sh/'
        },
        {
            link: 'https://github.com/renanhenriquedev/to-do-list',
            image: list,
            text: 'Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de lista de tarefas para o dia a dia.',
            github: 'https://github.com/renanhenriquedev/to-do-list',
            deploy: 'https://list-project.surge.sh/'
        },
        {
            link: 'https://github.com/renanhenriquedev/hamburger-shop',
            image: burguer,
            text: 'Projeto com funcionalidades de HTML e CSS com o objeito de simular um site de uma hamburgueria local.',
            github: 'https://github.com/renanhenriquedev/hamburger-shop',
            deploy: 'https://burguer-project.surge.sh/'
        }
    ]

    return (
        <main>
            {projects.map((project, index) => (
                <div key={index} id={styles.container}>
                    {console.log(index)}
                    <img id={styles.pixel} className={styles.img} src={project.image} alt={project.text}/>
                    <aside className={styles.aside}>{project.text}</aside>
                    <div id={styles.funcionality}>
                        <a href={project.github}>
                            <button type="button" id={styles.git} className={styles['button-28']}>Github</button>
                        </a>
                        <a href={project.deploy}>
                            <button type="button" id={styles.git} className={styles['button-28']}>Deploy</button>
                        </a>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Projects;