import pixelArt from '../../imagens/pixel-art.png'
import list from '../../imagens/list.png'
import burguer from '../../imagens/burguer.png'

const teste = {
    "project": [
        {
            "link": "https://github.com/renanhenriquedev/Pixel-Art",
            "image": pixelArt,
            "text": "Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de pixel art para fazer os seus desenhos.",
            "github": "https://github.com/renanhenriquedev/Pixel-Art",
            "deploy": "https: //pixelart-project.surge.sh/"
        },
        {
            "link": "https://github.com/renanhenriquedev/to-do-list",
            "image": list,
            "text": "Projeto com funcionalidades de HTML, CSS e Javascript com o objetivo de simular uma plataforma de lista de tarefas para o dia a dia.",
            "github": "https://github.com/renanhenriquedev/to-do-list",
            "deploy": "https: //list-project.surge.sh/"
        },
        {
            "link": "https://github.com/renanhenriquedev/hamburger-shop",
            "image": burguer,
            "text": "Projeto com funcionalidades de HTML e CSS com o objeito de simular um site de uma hamburgueria local.",
            "github": "https://github.com/renanhenriquedev/hamburger-shop'",
            "deploy": "https: //burguer-project.surge.sh/"
        }
    ]
}
export default JSON.stringify(teste)