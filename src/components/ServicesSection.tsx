import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Services" in #0C0C0C */}
        <FadeIn delay={0} y={40} duration={0.7}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 service items in vertical list */}
        <div className="w-full">
          {servicesData.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30} duration={0.7}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t gap-4 sm:gap-8 transition-colors duration-200 hover:bg-black/[0.015]">
                {/* Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none shrink-0 w-24 sm:w-40 md:w-56"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </span>

                {/* Name + description stacked vertically */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
