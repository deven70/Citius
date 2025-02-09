'use client';
import Image from 'next/image';

const services = [
  {
    title: 'DevOps & Modernization',
    description: 'Companies are adopting DevOps as a delivery model that builds collaboration between the organization developers and operators.',
    icon: '/images/devlopment.svg'
  },
  {
    title: 'Digital Transformation',
    description: 'We assist you with building the right environment whether it is public or private cloud, stretching workload between private & public cloud depends on business need parameters, optimizing not only performance but also to meet TCO.',
    icon: '/images/digital-transformation.svg'
  },
  {
    title: 'Business Continuity Services',
    description: 'This brings the need to adopt an appropriate solution which can cater to business continuity requirements in any cloud on any type of storage.',
    icon: '/images/business-service.svg'
  }
];

const OurServices = () => {
  return (
    <section className="services">
    <h2>Our Services</h2>
    <div className="services-container">
        <div className="service-card cut-left">
            <div className="service-icon">
                <img src="/images/cloud-services.svg" alt="Cloud Services Icon" />
            </div>
            <h3>Cloud Services</h3>
            <p>Comprehensive cloud solutions to help businesses leverage the power of cloud computing for enhanced scalability and efficiency.</p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src="/images/devlopment.svg" alt="DevOps Icon" />
            </div>
            <h3>DevOps & Modernization</h3>
            <p>Companies are adopting DevOps as a delivery model that builds collaboration between the organization developers and operators.</p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src="/images/digital-transformation.svg" alt="Digital Transformation Icon" />
            </div>
            <h3>Digital Transformation</h3>
            <p>We assist you with building the right environment whether it is public or private cloud, stretching workload between private & public cloud depends on business need parameters, optimizing not only performance but also to meet TCO.</p>
        </div>

        <div className="service-card">
            <div className="service-icon">
                <img src="/images/business-service.svg" alt="Business Continuity Icon" />
            </div>
            <h3>Business Continuity Services</h3>
            <p>This brings the need to adopt an appropriate solution which can cater to business continuity requirements in any cloud or any type of storage.</p>
        </div>

        <div className="service-card cut-right">
            <div className="service-icon">
                <img src="/images/security.svg" alt="Security Services Icon" />
            </div>
            <h3>Security Services</h3>
            <p>Comprehensive security solutions to protect your digital assets and ensure business continuity in the modern threat landscape.</p>
        </div>
    </div>
</section>
  );
};

export default OurServices;
