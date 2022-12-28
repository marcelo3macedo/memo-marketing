import LogoNamed from "@components/elements/logoNamed"
import LinkList from "@components/elements/linkList"
import HeaderMobile from "../mobile"
import { Container, Wrapper } from "./styles"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <LogoNamed />
                <LinkList />
            </Container>
            <HeaderMobile />
        </Wrapper>
    )
}

export default Header