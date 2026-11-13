import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Swords } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './Internship.css';

const internships = [
  {
    role: 'Visiting PhD Researcher',
    org: 'University of Copenhagen',
    location: 'Copenhagen, Denmark',
    period: 'Sep 2026 - Present',
    intro: (
      <>
        Extending computational tools to environmental biotechnology — studying bacterial
        defluorinases capable of degrading <strong>PFAS "forever chemicals"</strong>.
      </>
    ),
    highlights: [
      'Executing structure-based computational studies on bacterial defluorinating enzymes (FAcD, HAD) involved in PFAS degradation.',
      'Combining homology modeling, binding-site analysis, molecular docking, and molecular dynamics (MD) simulations.',
      'Characterizing enzyme active-site flexibility and substrate positioning.',
    ],
  },
  {
    role: 'Doctoral Student, Bioinformatics',
    org: 'University of Campania "Luigi Vanvitelli"',
    location: 'Naples, Italy',
    period: 'Jun 2024 - Present',
    intro: (
      <>
        Doctoral research in <strong>computational drug discovery and cancer genomics</strong>,
        focused on protein dynamics and DNA damage response in tumors.
      </>
    ),
    highlights: [
      'Investigating protein conformational dynamics and allosteric regulation.',
      'Applying transcriptomic approaches to identify DNA damage response vulnerabilities in ALT-positive tumors.',
    ],
  },
];

const Internship = () => {
  return (
    <section id="internship" className="internship section-padding">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle icon={Swords} title="Shugyō" kicker="修行" english="Research" />
        </motion.h2>

        <div className="internship-grid">
          {internships.map((item, index) => (
            <motion.div
              className="internship-card glass-panel"
              key={item.role + item.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.1 }}
            >
              <div className="internship-header">
                <div>
                  <h3 className="internship-role">{item.role}</h3>
                  <p className="internship-org">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ''}{' '}
                    <span>[{item.period}]</span>
                  </p>
                </div>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-repo interactive"
                  >
                    {item.link.label} <ArrowRight size={18} />
                  </a>
                )}
              </div>

              <div className="internship-card-body">
                <p className="internship-intro">{item.intro}</p>

                <ul className="internship-highlights">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
