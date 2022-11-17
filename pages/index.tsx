import BlockAboutUs from "@components/blocks/aboutUs";
import BlockFeatured from "@components/blocks/featured";
import BlockHowWorks from "@components/blocks/howWorks";
import BlockOptions from "@components/blocks/options";
import BlockOurPlans from "@components/blocks/ourPlans";
import Layout from "@components/layouts/main";

export default function Home() {
  return (
    <Layout>      
      <BlockFeatured />
      <BlockOptions />
      <BlockHowWorks />
      <BlockOurPlans />
      <BlockAboutUs />
    </Layout>
  )
}
