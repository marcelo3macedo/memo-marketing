import LogoNamed from "@components/elements/logoNamed"
import IconMedium from "@components/icons/IconMedium"
import { Container, Wrapper } from "./styles"

const HeaderMobile = () => {
    return (
        <Wrapper>
            <Container>
                <LogoNamed />
            </Container>
        </Wrapper>
    )
}

export default HeaderMobile