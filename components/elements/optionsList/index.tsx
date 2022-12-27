import { useTranslation } from 'react-multi-lang'
import ListItens from '../listItens'
import { Title, Wrapper } from "./styles"

const OptionsList = () => {
    const t = useTranslation()
    const items = [
        {
            "title": "Selecione temas de seu interesse",
            "description": "Diversos temas abordando vestibulares, concursos e muito mais. Você poderá selecionar vários temas.",
            "icon": "selectItem"
        },
        {
            "title": "Sessões serão geradas para revisão",
            "description": "Periodicamente serão geradas sessões com cards selecionados através de Inteligência Artificial.",
            "icon": "timed"
        },
        {
            "title": "Avalie cada resposta apresentada",
            "description": "Cada card possuirá uma pergunta e uma resposta oculta. Ao selecionar ver resposta, avalie como foi para você relembrar o conteúdo.",
            "icon": "checkedItem"
        },
        {
            "title": "Novas sessões serão geradas",
            "description": "As respostas de cada sessão serão analisadas por uma Inteligência Artificial, e com elas novas sessões serão geradas.",
            "icon": "repeat"
        },
        {
            "title": "Retenção do conteúdo",
            "description": "A cada sessão realizada, a tendência é que o % de retenção do conteúdo aumento, conforme o gráfico abaixo.",
            "icon": "idea"
        }
    ]

    return (
        <Wrapper>
            <Title>{t('blocks.howWorks.doubt')}</Title>
            <ListItens items={items} /> 
        </Wrapper>
    )
}

export default OptionsList