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

    const tecnologias = [
        {
            image: iconHtml
        },
        {
            image: iconCss
        },
        {
            image: iconJS
        }
    ]

    const ferramentas = [
        {
            image: iconGitHub
        },
        {
            image: iconLinux
        },
        {
            image: iconGit
        }
    ]

    const textos = [
        {
            text: 'Graduando em Analise e Desenvolvimento de Sistemas, (Uninter 2025)'
        },
        {
            text: 'Diploma de Lógica de Programação os primeiros programas com Javascript e HTML, (Alura) 2022'
        },
        {
            text: 'Diploma de Foco tranzendo mais resultados para o dia a dia, (Alura) 2022'
        },
        {
            text: 'Diploma de Git e Github controle e compartilhe seu código, (Alura) 2022'
        }
    ]

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
                {textos.map((texto, index) => (
                    <p key={index}> {texto.text}</p>
                ))}
            </div>

            <div id={styles.tecnologia}>
                <p className={styles.titulo}>Tecnologias</p>
                {tecnologias.map((tecnologia, index) => (
                    <img key={index} className={`${styles.icon} ${styles.img}`} src={tecnologia.image} />
                ))}
            </div>

            <div id={styles.ferramentas}>
                <p className={styles.titulo}>Ferramentas</p>
                {ferramentas.map((ferramenta, index) => (
                    <img key={index} className={`${styles.icon} ${styles.img}`} src={ferramenta.image} />
                ))}
            </div>
        </main>
    )
}

export default Curriculo;