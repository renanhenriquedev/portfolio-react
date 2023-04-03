import React from "react";
import styles from './Projects.module.css'
import pixelArt from '../../imagens/pixel-art.png'
import list from '../../imagens/list.png'
import burguer from '../../imagens/burguer.png'



function Projects() {
    return (
        <main>
            <div id={styles.container}>

                <img id={styles.pixel} className={styles.img}src={pixelArt}/>

                    <aside className={styles.aside}>Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de
                        pixel art para fazer os seus desenhos.</aside>

                    <div id={styles.funcionality}>
                        <a href="https://github.com/renanhenriquedev/Pixel-Art">
                            <button type="button" id={styles.git} className={styles['button-28']}>Github</button>
                        </a>

                        <a href="https://pixelart-project.surge.sh/">
                            <button type="button" id={styles.git} className={styles['button-28']}>Deploy</button>
                        </a>
                    </div>

            </div>

            <div id={styles.container}>

                <img id={styles.pixel} className={styles.img}src={list}/>

                    <aside className={styles.aside}>Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de
                        lista de tarefas para o dia a dia.</aside>

                    <div id={styles.funcionality}>

                        <a href="https://github.com/renanhenriquedev/to-do-list">
                            <button type="button" id={styles.git} className={styles['button-28']}>Github</button>
                        </a>

                        <a href="https://list-project.surge.sh/">
                            <button type="button" id={styles.git} className={styles['button-28']}>Deploy</button>
                        </a>

                    </div>
            </div>

            <div id={styles.container}>

                <img id={styles.pixel} className={styles.img}src={burguer}/>

                    <aside className={styles.aside}>Projeto com funcionalidades de HTML e CSS com o objeito de simular um site de uma hamburgueria local.
                    </aside>

                    <div id={styles.funcionality}>

                        <a href="https://github.com/renanhenriquedev/hamburger-shop">
                            <button type="button" id={styles.git} className={styles['button-28']}>Github</button>
                        </a>

                        <a href="https://burguer-project.surge.sh/">
                            <button type="button" id={styles.git} className={styles['button-28']}>Deploy</button>
                        </a>

                    </div>
            </div>
        </main>
    )
}

export default Projects;