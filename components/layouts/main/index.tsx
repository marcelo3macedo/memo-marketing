import { MainProps } from "@interfaces/layouts/main.interface"
import Header from "@components/headers/main"
import { Container, Wrapper } from "./styles"
import Footer from "@components/footer/main"
  
const Layout = ({ children }: MainProps) => {
    return (
        <Wrapper>
            <Header/>      
            <Container>
                {children}
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Layout