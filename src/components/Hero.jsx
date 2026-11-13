import React from 'react';
import { motion } from 'framer-motion';
import Avatar3D from './Avatar3D';
import HoverTooltip from './HoverTooltip';
import './Hero.css';

const Hero = ({ ready = true }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-text-block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-kicker">PhD Researcher · Bioinformatics</div>
            <h1 className="hero-name">
              Shaukat
              <HoverTooltip label="Mohammad Shaukat Ali" className="hero-name-kicker">
                シャウカト
              </HoverTooltip>
            </h1>
            <p className="hero-subtext">
              Computational drug discovery, cancer genomics, and PFAS bioremediation — from molecular
              docking to dynamics simulations. Visiting researcher at the University of Copenhagen.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary"><span>View Research</span></a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </motion.div>
        </div>

        {/* Only opacity and translation here: R3F measures the canvas with
            getBoundingClientRect, so scaling this wrapper would make it size
            the drawing buffer to the mid-animation scale and then snap. */}
        <motion.div
          className="hero-3d-block"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Avatar3D />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
};

export default Hero;
