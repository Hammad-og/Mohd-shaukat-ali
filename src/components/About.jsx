import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Flag, SquareTerminal } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './About.css';

const EDUCATION = [
  { title: 'Patna University', meta: 'B.Sc. Biotechnology · 2014 - 2017' },
  { title: 'Jamia Millia Islamia', meta: 'M.Sc. Biomathematics, Bioinformatics & Computational Biology · 2018 - 2020' },
  { title: 'University of Campania "Luigi Vanvitelli"', meta: 'PhD, Bioinformatics · Naples, Italy', current: true },
];

const LEADERSHIP = [
  { title: 'Trainee, ICGEB', meta: 'Nov 2019 - May 2020' },
  { title: 'Scientific Officer, Scangene Labs', meta: 'Jul 2021 - Aug 2022' },
  { title: 'Research Analyst, Eras Lucknow Medical College', meta: 'Feb 2023 - Feb 2024' },
  { title: 'Visiting PhD Researcher, University of Copenhagen', meta: 'Sep 2026 - Present', current: true },
];

const PathTrack = ({ icon: Icon, label, note, steps, delay = 0 }) => (
  <div className="path-track">
    <div className="path-track-head">
      <Icon size={18} className="path-track-icon" />
      <h3>{label}</h3>
      {note && <span className="path-track-note">{note}</span>}
    </div>

    <div className="path-line">
      {steps.map((step, i) => (
        <React.Fragment key={step.title}>
          {i > 0 && (
            <motion.span
              className="path-arrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + i * 0.09 - 0.04 }}
              aria-hidden="true"
            >
              <ChevronRight size={18} />
            </motion.span>
          )}

          <motion.div
            className={`path-node${step.current ? ' path-node--current' : ''}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + i * 0.09 }}
          >
            <span className="path-dot" aria-hidden="true" />
            <span className="path-node-title">{step.title}</span>
            <span className="path-node-meta">{step.meta}</span>
          </motion.div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle icon={SquareTerminal} title="Michi" kicker="道" english="The Path" />
        </motion.h2>

        <div className="about-paths">
          <PathTrack icon={BookOpen} label="Education" steps={EDUCATION} delay={0.1} />

          <PathTrack
            icon={Flag}
            label="Research Experience"
            note="From the lab bench to computational biology"
            steps={LEADERSHIP}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
