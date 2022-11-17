import { useTranslation } from 'react-multi-lang'
import ListItens from '../listItens'
import { Wrapper, Title, SubTitle } from "./styles"

const TextWithList = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <SubTitle>{t('blocks.options.subTitle')}</SubTitle>
            <Title>{t('blocks.options.title')}</Title>
            <ListItens /> 
        </Wrapper>
    )
}

export default TextWithList