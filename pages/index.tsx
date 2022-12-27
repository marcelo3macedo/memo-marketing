import AboutUs from "@components/blocks/aboutUs";
import Featured from "@components/blocks/featured";
import HowWorks from "@components/blocks/howWorks";
import Options from "@components/blocks/options";
import OurPlans from "@components/blocks/ourPlans";
import Layout from "@components/layouts/main";

export default function Home() {
  return (
    <Layout>
      <Featured />
      <Options />
      <HowWorks />
      <OurPlans />
      <AboutUs />
    </Layout>
  )
}
