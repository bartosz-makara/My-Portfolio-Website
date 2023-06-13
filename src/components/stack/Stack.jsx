import "./stack.css";
import Primary from "./Primary";
import Secondary from "./Secondary";
import { motion } from "framer-motion";

const Stack = ({ setSelectedPage }) => {
  return (
    <section className="stack section" id="stack">
      <motion.div onViewportEnter={() => setSelectedPage("stack")}>
        <h2 className="section__title">Stack</h2>
        <span className="section__subtitle">My go-to tools</span>

        <div className="stack__container container grid">
          <Primary />
          <Secondary />
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
