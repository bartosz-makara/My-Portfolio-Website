const stack = [
  {
    id: 1,
    name: "GCP",
    level: "Beginner",
    icon: "bx bxl-google-cloud",
  },
  {
    id: 2,
    name: "NodeJS",
    level: "Beginner",
    icon: "bx bxl-nodejs",
  },
  {
    id: 3,
    name: "Git",
    level: "Beginner",
    icon: "bx bxl-git",
  },
  {
    id: 4,
    name: "MongoDB",
    level: "Beginner",
    icon: "bx bxl-mongodb",
  },
  {
    id: 5,
    name: "Github",
    level: "Beginner",
    icon: "bx bxl-github",
  },
  {
    id: 6,
    name: "PostgreSQL",
    level: "Beginner",
    icon: "bx bxl-postgresql",
  },
];

const Secondary = () => {
  return (
    <div className="stack__content">
      <h3 className="stack__title">Secondary Tools</h3>

      <div className="stack__box">
        <div className="stack__group">
          {stack.map((tool, index) => {
            if (tool.id < 4) {
              return (
                <div className="stack__data" key={index}>
                  <i class={tool.icon}></i>

                  <div>
                    <h3 className="stack__name">{tool.name}</h3>
                    {/* <i class="bx bxl-html5"></i> */}
                    <span className="stack__level">{tool.level}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="stack__group">
          {stack.map((tool, index) => {
            if (tool.id > 3) {
              return (
                <div className="stack__data" key={index}>
                  <i class={tool.icon}></i>

                  <div>
                    <h3 className="stack__name">{tool.name}</h3>
                    {/* <i class="bx bxl-html5"></i> */}
                    <span className="stack__level">{tool.level}</span>
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
