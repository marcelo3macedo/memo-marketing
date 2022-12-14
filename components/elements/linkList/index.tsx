import Link from 'next/link'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Title } from "./styles"

const LinkList = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Link href='/howWorks'>
                <Title>{t('links.howWorks')}</Title>
            </Link>
            <Link href='/plans'>
                <Title>{t('links.plans')}</Title>
            </Link>
            <Link href='/contactUs'>
                <Title>{t('links.contactUs')}</Title>
            </Link>
        </Wrapper>
    )
}

export default LinkList