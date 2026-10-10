import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const projectsData: ProjectItem[] = [
  {
    id: 'nextlevel-studio',
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Nextlevel Studio requested a futuristic brand universe featuring hard-surface industrial assets, kinetic lighting installations, and spatial product choreography for their agency showcase.',
    year: '2026',
    deliverables: ['3D Asset Library', 'Spatial Visuals', 'Hero Motion Loop', 'Brand Direction'],
    tools: ['Blender 4.2', 'Cycles', 'Cinema 4D', 'Octane'],
  },
  {
    id: 'aura-brand-identity',
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'An exploration in iridescent metallic materials, soft organic curvatures, and high-fashion editorial styling designed to explore identity in digital-physical hybrid products.',
    year: '2026',
    deliverables: ['Material System', 'Editorial Renders', 'Identity Design', '3D Typography'],
    tools: ['Cinema 4D', 'Octane Render', 'Substance Painter', 'Figma'],
  },
  {
    id: 'solaris-digital',
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Comprehensive 3D visual language for a high-performance compute platform, translating abstract energy systems into tactile glass and luminous chrome sculptural compositions.',
    year: '2025',
    deliverables: ['Key Visual Series', 'Interactive Web Assets', 'Lighting Pipeline', 'Motion Loops'],
    tools: ['Blender 4.2', 'Octane Render', 'After Effects', 'Photoshop'],
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  onSelectProject,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex items-center justify-center w-full">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.number}
            </span>

            {/* Category label and project name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase tracking-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton onClick={() => onSelectProject(project)} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 pt-4 sm:pt-6 items-stretch">
          {/* Left column (40% width / 4 cols) - 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 justify-between">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161618] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} detail 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161618] border border-white/5 cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} detail 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right column (60% width / 6 cols) - 1 tall image */}
          <div
            className="md:col-span-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161618] border border-white/5 cursor-pointer group h-[300px] sm:h-[400px] md:h-full min-h-[290px] md:min-h-[440px]"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} tall showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = projectsData.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-28 pb-32 px-4 sm:px-6 md:px-10"
    >
      {/* Heading: "Project" (singular) using .hero-heading gradient */}
      <FadeIn delay={0} y={40} duration={0.7}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* 3 sticky-stacking project cards */}
      <div className="relative flex flex-col gap-8 pb-20">
        {projectsData.map((project, index) => {
          // targetScale = 1 - (totalCards - 1 - index) * 0.03
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const rangeStart = index * (1 / totalCards);
          const rangeEnd = 1;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>
    </section>
  );
};
