import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import { projectsData } from "./Data";
import WorkItem from "./WorkItem";

const Work = () => {
  const [portfolioCategory, setPortfolioCategory] = useState({
    name: "all",
  });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (portfolioCategory.name === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) => {
        return project.category === portfolioCategory.name;
      });
      setProjects(filteredProjects);
    }
  }, [portfolioCategory]);

  const handleClick = (e, index) => {
    setPortfolioCategory({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "work__item active-work" : "work__item"
              }`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Work;
