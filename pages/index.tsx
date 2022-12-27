import AboutUs from "@components/blocks/aboutUs";
import Featured from "@components/blocks/featured";
import HowWorks from "@components/blocks/howWorks";
import Loading from "@components/blocks/loading";
import Options from "@components/blocks/options";
import OurPlans from "@components/blocks/ourPlans";
import Layout from "@components/layouts/main";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Loading />

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
