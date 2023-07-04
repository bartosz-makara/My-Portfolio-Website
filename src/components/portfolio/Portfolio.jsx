import React from "react";
import "./portfolio.css";
import Work from "./Work";
import { motion } from "framer-motion";

const Portfolio = ({ setSelectedPage }) => {
  return (
    <section className="work section" id="showcase">
      <motion.div onViewportEnter={() => setSelectedPage("showcase")}>
        <h2 className="section__title">Showcase</h2>
        <span className="section__subtitle">Things I can do</span>

        <Work />
      </motion.div>
    </section>
  );
};

export default Portfolio;
