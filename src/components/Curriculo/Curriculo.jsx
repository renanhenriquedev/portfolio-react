import React from 'react';
import renanAvatar from '../../imagens/v1.png'
import iconHtml from '../../imagens/html-5.png'
import iconCss from '../../imagens/css-3.png'
import iconJS from '../../imagens/js-file.png'
import iconGitHub from '../../imagens/github.png'
import iconLinux from '../../imagens/linux.png'
import iconGit from '../../imagens/git.png'

function Curriculo() {
    return (

        <main>
            <div id="container">
                <img src={renanAvatar} alt='foto de Renan' />
                <aside>Olá, Me chamo Renan, Sou um desenvolvedor em crescimento, Tenho 20 anos e atualmente estudo
                    programação por conta propria almejando ser um
                    desenvolverdor Back End, Demasiadamente focado para estudar e absorver conhecimento.</aside>
            </div>

            <div id="content">
                <p className="titulo">Curriculo -</p>
                <p>Graduando em Analise e Desenvolvimento de Sistemas, (Uninter 2025)</p>
                <p>Diploma de Lógica de Programação os primeiros programas com Javascript e HTML, (Alura) 2022</p>
                <p>Diploma de Foco tranzendo mais resultados para o dia a dia, (Alura) 2022</p>
                <p>Diploma de Git e Github controle e compartilhe seu código, (Alura) 2022</p>
            </div>

            <div id="tecnologia">
                <p className="titulo">Tecnologias</p>
                <img className='icon' src={iconHtml} />
                <img className="icon" src={iconCss}/>
                <img className="icon" src={iconJS} />
            </div>

            <div id="ferramentas">
                <p className="titulo">Ferramentas</p>
                <img className="icon" src={iconGitHub} />
                <img className='icon' src={iconLinux} />
                <img className="icon" src={iconGit}/>
            </div>
        </main>
    )
}

export default Curriculo;