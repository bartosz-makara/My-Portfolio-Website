const skills = [
  {
    id: 1,
    name: "Figma",
    level: "Proficient",
  },
  {
    id: 2,
    name: "TailwindCSS",
    level: "Proficient",
  },
  {
    id: 3,
    name: "Typescript",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "React",
    level: "Proficient",
  },
  {
    id: 5,
    name: "Redux",
    level: "Intermediate",
  },
  {
    id: 6,
    name: "NextJS",
    level: "Intermediate",
  },
];

const Primary = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Primary Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => {
            if (skill.id < 4) {
              return (
                <div className="skills__data" key={index}>
                  <i class="bx bx-badge-check"></i>

                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    {/* <i class="bx bxl-html5"></i> */}
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="skills__group">
          {skills.map((skill, index) => {
            if (skill.id > 3) {
              return (
                <div className="skills__data" key={index}>
                  <i class="bx bx-badge-check"></i>

                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    {/* <i class="bx bxl-html5"></i> */}
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Primary;
