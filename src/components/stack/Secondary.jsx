const stack = [
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
    <div className="stack__content">
      <h3 className="stack__title">Secondary Tools</h3>

      <div className="stack__box">
        <div className="stack__group">
          {stack.map((tool, index) => {
            if (tool.id < 4) {
              return (
                <div className="stack__data" key={index}>
                  <i class="bx bx-badge-check"></i>

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
                  <i class="bx bx-badge-check"></i>

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
