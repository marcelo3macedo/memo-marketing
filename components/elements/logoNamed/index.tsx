import logo from '@assets/images/logo.png'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Picture, Title } from "./styles"

const LogoNamed = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Picture src={logo.src} />
        </Wrapper>
    )
}

export default LogoNamed