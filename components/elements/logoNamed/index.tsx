import logo from '@assets/images/logo.png'
import Link from 'next/link'
import { Wrapper, Picture } from "./styles"

const LogoNamed = () => {
    return (
        <Wrapper>
            <Link href='/'>
                <Picture src={logo.src} />
            </Link>
        </Wrapper>
    )
}

export default LogoNamed