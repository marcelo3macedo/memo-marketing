import ListItens from '../listItens'
import { Wrapper } from "./styles"

const OptionsList = () => {
    const items = [
        {
            "title": "Selecione temas de seu interesse",
            "description": "Diversos temas abordando vestibulares, concursos e muito mais. Você poderá selecionar vários temas.",
            "icon": "checklist"
        },
        {
            "title": "Sessões serão geradas para revisão",
            "description": "Periodicamente serão geradas sessões com cards selecionados através de Inteligência Artificial.",
            "icon": "checklist"
        },
        {
            "title": "Avalie cada resposta apresentada",
            "description": "Cada card possuirá uma pergunta e uma resposta oculta. Ao selecionar ver resposta, avalie como foi para você relembrar o conteúdo.",
            "icon": "checklist"
        },
        {
            "title": "Novas sessões serão geradas",
            "description": "As respostas de cada sessão serão analisadas por uma Inteligência Artificial, e com elas novas sessões serão geradas.",
            "icon": "checklist"
        },
        {
            "title": "Retenção do conteúdo",
            "description": "A cada sessão realizada, a tendência é que o % de retenção do conteúdo aumento, conforme o gráfico abaixo.",
            "icon": "checklist"
        }
    ]

    return (
        <Wrapper>
            <ListItens items={items} /> 
        </Wrapper>
    )
}

export default OptionsList