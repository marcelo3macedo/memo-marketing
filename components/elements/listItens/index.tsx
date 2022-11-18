import IconLarge from '@components/icons/IconLarge'
import { Wrapper, Title, SubTitle, Container, Info } from "./styles"

const ListItens = ({ items }:any) => {
    return (
        <Wrapper>
            {items.map((i, index) => (
                <Container key={index}>
                    <IconLarge name={i.icon} />
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