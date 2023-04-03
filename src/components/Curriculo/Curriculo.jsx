import React from 'react';
import renanAvatar from '../../imagens/v1.png'
import iconHtml from '../../imagens/html-5.png'
import iconCss from '../../imagens/css-3.png'
import iconJS from '../../imagens/js-file.png'
import iconGitHub from '../../imagens/github.png'
import iconLinux from '../../imagens/linux.png'
import iconGit from '../../imagens/git.png'

import styles from './Curriculo.module.css'


function Curriculo() {
    return (

        <main className={styles.main}>
            <div id={styles.container}>
                <img className={styles.img} src={renanAvatar} alt='foto de Renan' />
                <aside>Olá, Me chamo Renan, Sou um desenvolvedor em crescimento, Tenho 20 anos e atualmente estudo
                    programação por conta propria almejando ser um
                    desenvolverdor Back End, Demasiadamente focado para estudar e absorver conhecimento.</aside>
            </div>

            <div id={styles.content}>
                <p className={styles.titulo}>Curriculo -</p>
                <p>Graduando em Analise e Desenvolvimento de Sistemas, (Uninter 2025)</p>
                <p>Diploma de Lógica de Programação os primeiros programas com Javascript e HTML, (Alura) 2022</p>
                <p>Diploma de Foco tranzendo mais resultados para o dia a dia, (Alura) 2022</p>
                <p>Diploma de Git e Github controle e compartilhe seu código, (Alura) 2022</p>
            </div>

            <div id={styles.tecnologia}>
                <p className={styles.titulo}>Tecnologias</p>
                <img className={`${styles.icon} ${styles.img}`} src={iconHtml} />
                <img className={`${styles.icon} ${styles.img}`} src={iconCss} />
                <img className={`${styles.icon} ${styles.img}`} src={iconJS} />
            </div>

            <div id={styles.ferramentas}>
                <p className={styles.titulo}>Ferramentas</p>
                <img className={`${styles.icon} ${styles.img}`} src={iconGitHub} />
                <img className={`${styles.icon} ${styles.img}`} src={iconLinux} />
                <img className={`${styles.icon} ${styles.img}`} src={iconGit} />
            </div>
        </main>
    )
}

export default Curriculo;