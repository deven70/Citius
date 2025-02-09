import React from 'react';
import { Container } from '@/components/Container';
import OurServices from '@/components/OurServices';
import TechnologyPartners from '@/components/TechnologyPartners';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container>
        <OurServices />
        <TechnologyPartners />
      </Container>
    </main>
  );
}
