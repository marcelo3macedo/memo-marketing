import LogoNamed from "@components/elements/logoNamed"
import LinkList from "@components/elements/linkList"
import { Container, Wrapper } from "./styles"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <LogoNamed />
                <LinkList />
            </Container>
        </Wrapper>
    )
}

export default Header