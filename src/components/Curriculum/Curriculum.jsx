import React from 'react';
import renanAvatar from '../../imagens/v1.png'
import iconHtml from '../../imagens/html-5.png'
import iconCss from '../../imagens/css-3.png'
import iconJS from '../../imagens/js-file.png'
import iconGitHub from '../../imagens/github.png'
import iconLinux from '../../imagens/linux.png'
import iconGit from '../../imagens/git.png'

import styles from './Curriculum.module.css'

import data from './Curriculum.json'


function Curriculum() {

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

    return (

        <main className={styles.main}>
            <div id={styles.container}>
                <img className={styles.img} src={renanAvatar} alt='foto de Renan' />
                <aside>{data.resumo}</aside>
            </div>

            <div id={styles.content}>
                <p className={styles.titulo}>Curriculo -</p>
                {data.textos.map((texto, index) => (
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

export default Curriculum;