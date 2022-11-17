import ButtonPrimary from '@components/buttons/primary'
import IconLarge from '@components/icons/IconLarge'
import { useTranslation } from 'react-multi-lang'
import { Wrapper, Container, Header, Body, Description, Option, Item, Footer } from "./styles"

const TableOptions = () => {
    const t = useTranslation()

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Description></Description>
                    <Option>{t('blocks.ourPlans.standard')}</Option>
                    <Option>{t('blocks.ourPlans.pro')}</Option>
                </Header>
                <Body>
                    <Item>
                        <Description>{t('blocks.ourPlans.simultaneos')}</Description>
                        <Option>10</Option>
                        <Option>Ilimitado</Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.cardsPerSession')}</Description>
                        <Option>100</Option>
                        <Option>Ilimitado</Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.ads')}</Description>
                        <Option><IconLarge name="time" /></Option>
                        <Option><IconLarge name="time" /></Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.integration')}</Description>
                        <Option><IconLarge name="time" /></Option>
                        <Option><IconLarge name="time" /></Option>
                    </Item>
                    <Item>
                        <Description>{t('blocks.ourPlans.evolution')}</Description>
                        <Option><IconLarge name="time" /></Option>
                        <Option><IconLarge name="time" /></Option>
                    </Item>
                </Body>
                <Footer>
                    <Item>
                        <Description></Description>
                        <Option>
                            <ButtonPrimary content='Quero esse plano' />
                        </Option>
                        <Option>
                            <ButtonPrimary content='Quero esse plano' />
                            <ButtonPrimary content='Quero esse plano' />
                        </Option>
                    </Item>
                </Footer>
            </Container>
        </Wrapper>
    )
}

export default TableOptions