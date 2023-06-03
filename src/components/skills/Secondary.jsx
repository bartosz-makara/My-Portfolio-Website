const skills = [
  {
    id: 1,
    name: "GCP",
    level: "Beginner",
  },
  {
    id: 2,
    name: "NodeJS",
    level: "Beginner",
  },
  {
    id: 3,
    name: "Express",
    level: "Beginner",
  },
  {
    id: 4,
    name: "MongoDB",
    level: "Beginner",
  },
  {
    id: 5,
    name: "Git/Github",
    level: "Beginner",
  },
  {
    id: 6,
    name: "PostgreSQL",
    level: "Beginner",
  },
];

const Secondary = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Secondary Tools</h3>

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

export default Secondary;
