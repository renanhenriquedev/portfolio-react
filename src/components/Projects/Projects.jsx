import React from "react";
import './Projects.css'
import pixelArt from '../../imagens./pixelart.png'

function Projects() {
    return (
        <main>
            <div id="container">

                <img id='pixel' src={pixelArt}/>

                    <aside>Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de
                        pixel art para fazer os seus desenhos.</aside>

                    <div id="funcionality">
                        <a href="https://github.com/renanhenriquedev/Pixel-Art">
                            <button type="button" id='git' class="button-28">Github</button>
                        </a>

                        <a href="https://pixelart-project.surge.sh/">
                            <button type="button" id='git' class="button-28">Deploy</button>
                        </a>
                    </div>

            </div>

            <div id="container">

                <img id='pixel' src="./imagens/list.png" width="10px"/>

                    <aside>Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de
                        lista de tarefas para o dia a dia.</aside>

                    <div id="funcionality">

                        <a href="https://github.com/renanhenriquedev/to-do-list">
                            <button type="button" id='git' class="button-28">Github</button>
                        </a>

                        <a href="https://list-project.surge.sh/">
                            <button type="button" id='git' class="button-28">Deploy</button>
                        </a>

                    </div>
            </div>

            <div id="container">

                <img id='pixel' src="./imagens/burguer.png" width="10px"/>

                    <aside>Projeto com funcionalidades de HTML e CSS com o objeito de simular um site de uma hamburgueria local.
                    </aside>

                    <div id="funcionality">

                        <a href="https://github.com/renanhenriquedev/hamburger-shop">
                            <button type="button" id='git' class="button-28">Github</button>
                        </a>

                        <a href="https://burguer-project.surge.sh/">
                            <button type="button" id='git' class="button-28">Deploy</button>
                        </a>

                    </div>
            </div>
        </main>
    )
}

export default Projects;