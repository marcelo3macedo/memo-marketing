import Head from "next/head";
import { useTranslation } from 'react-multi-lang';

const HeaderTop = () => {
    const t = useTranslation()

    return (
        <Head>
            <title>{t('application.title')}</title>
            <link rel="icon" href="logo.png" />
        </Head>
    )
}

export default HeaderTop