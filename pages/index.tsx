import BlockFeatured from "@components/blocks/featured";
import BlockOptions from "@components/blocks/options";
import Layout from "@components/layouts/main";

export default function Home() {
  return (
    <Layout>      
      <BlockFeatured />
      <BlockOptions />
    </Layout>
  )
}
