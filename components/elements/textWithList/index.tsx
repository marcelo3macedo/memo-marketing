import { useTranslation } from 'react-multi-lang'
import ListItens from '../listItens'
import { Wrapper, Title, SubTitle } from "./styles"

const TextWithList = () => {
    const t = useTranslation()
    const items = [
        {
            "title": "Vestibulares",
            "description": "Sessões com diversos conteúdos dos principais vestibulares do Brasil",
            "icon": "checklist"
        },
        {
            "title": "Concursos",
            "description": "Destaque-se memorizando os temas de diversos concursos públicos.",
            "icon": "checklist"
        },
        {
            "title": "Certificados / Cursos",
            "description": "Facilite seus cursos e certificações organizando os pontos mais importantes.",
            "icon": "checklist"
        },
        {
            "title": "Crie sua própria sessão",
            "description": "Crie sua sessão customizada com o tema que desejar!",
            "icon": "checklist"
        }
    ]

    return (
        <Wrapper>
            <SubTitle>{t('blocks.options.subTitle')}</SubTitle>
            <Title>{t('blocks.options.title')}</Title>
            <ListItens items={items} /> 
        </Wrapper>
    )
}

export default TextWithList