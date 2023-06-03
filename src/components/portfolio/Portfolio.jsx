import React from "react";
import "./portfolio.css";
import Work from "./Work";
import { motion } from "framer-motion";

const Portfolio = ({ setSelectedPage }) => {
  return (
    <section className="work section" id="portfolio">
      <motion.div onViewportEnter={() => setSelectedPage("portfolio")}>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Work />
      </motion.div>
    </section>
  );
};

export default Portfolio;
