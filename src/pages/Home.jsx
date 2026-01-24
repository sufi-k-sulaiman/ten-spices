import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import Hero from '@/components/home/Hero';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import AboutSection from '@/components/home/About';
import CateringCTA from '@/components/home/CateringCTA';

export default function Home() {
  const { data: featuredItems = [] } = useQuery({
    queryKey: ['featuredItems'],
    queryFn: () => base44.entities.MenuItem.filter({ is_featured: true }),
  });

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedMenu items={featuredItems} />
      <AboutSection />
      <CateringCTA />
    </div>
  );
}