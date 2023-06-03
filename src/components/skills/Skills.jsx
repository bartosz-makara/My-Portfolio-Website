import "./skills.css";
import Primary from "./Primary";
import Secondary from "./Secondary";
import { motion } from "framer-motion";

const Skills = ({ setSelectedPage }) => {
  return (
    <section className="skills section" id="skills">
      <motion.div onViewportEnter={() => setSelectedPage("stack")}>
        <h2 className="section__title">Stack</h2>
        <span className="section__subtitle">My go-to tools</span>

        <div className="skills__container container grid">
          <Primary />
          <Secondary />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
