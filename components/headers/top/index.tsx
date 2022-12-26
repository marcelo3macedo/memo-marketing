import Head from "next/head";
import { useTranslation } from 'react-multi-lang';

const HeaderTop = () => {
    const t = useTranslation()

    return (
        <Head>
            <title>{t('application.title')}</title>
            <link rel="icon" href="logo.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
    )
}

export default HeaderTop