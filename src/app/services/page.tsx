import Image from "next/image";
import { Container } from "@/components/Container";
import TechnologyPartners from "@/components/TechnologyPartners";
import OurServices from "@/components/OurServices";
import CounterBar from "@/components/CounterBar";
import MenuBar_2 from "@/components/MenuBar-2";
import FooterBar_2 from "@/components/FooterBar-2";
import ServiceHero from "@/components/Service-hero";
import WhatWeDo from "@/components/WhatWeDo";
import FAQ from "@/components/FAQ";
import ContactWrapper from "@/components/ContactWrapper";
export default function Services() {
  return (
    <div className="">
      <MenuBar_2 />
      <ServiceHero />
      <WhatWeDo />
      <FAQ />
      <ContactWrapper />
      <FooterBar_2 />
    </div>
  );
}
