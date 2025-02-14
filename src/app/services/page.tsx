import ServiceHero from "@/components/Service-hero";
import WhatWeDo from "@/components/WhatWeDo";
import FAQ from "@/components/FAQ";
import ContactWrapper from "@/components/ContactWrapper";
import MenuBar from "@/components/MenuBar";
import FooterBar from "@/components/FooterBar";
export default function Services() {
  return (
    <div className="">
      <MenuBar />
      <ServiceHero />
      <WhatWeDo />
      <FAQ />
      <ContactWrapper />
      <FooterBar />
    </div>
  );
}
