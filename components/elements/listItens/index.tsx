import IconLarge from '@components/icons/IconLarge'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Title, SubTitle, Container, Info } from "./styles"

const ListItens = () => {
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
            {items.map((i, index) => (
                <Container key={index}>
                    <IconLarge name="time" />
                    <Info>
                        <Title>{i.title}</Title>
                        <SubTitle>{i.description}</SubTitle>
                    </Info>
                </Container>
            ))}            
        </Wrapper>
    )
}

export default ListItens