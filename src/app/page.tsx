import Image from "next/image";
import { Container } from "@/components/Container";
import TechnologyPartners from "@/components/TechnologyPartners";
import OurServices from "@/components/OurServices";
import CounterBar from "@/components/CounterBar";
import CloudServices from "@/components/CloudService";
import TechnologyCertification from "@/components/TechnologyCertification";
import FooterBar from "@/components/FooterBar";
import MenuBar from "@/components/MenuBar";
import Awards from "@/components/Awards";
import ClientTestimonials from "@/components/ClientTestimonials";
import CaseStudy from "@/components/CaseStudy";
import Integrations from "@/components/Integrations";
export default function Home() {
  return (
    <div className="">
        <MenuBar />
        <CloudServices />
         <TechnologyPartners />
        <TechnologyCertification />
        <OurServices />
        <CounterBar /> 
        <Integrations />
        <CaseStudy />
        <ClientTestimonials />
        <Awards />
        <FooterBar />
    </div>
  );
}
