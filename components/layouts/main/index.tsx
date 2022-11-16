import { MainProps } from "@interfaces/layouts/main.interface"
import Header from "@components/headers/main"
import { Container, Wrapper } from "./styles"
  
const Layout = ({ children }: MainProps) => {
    return (
        <Wrapper>
            <Header/>      
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Layout