const stack = [
  {
    id: 1,
    name: "Figma",
    level: "Proficient",
  },
  {
    id: 2,
    name: "TailwindCSS",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Typescript",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "React",
    level: "Intermediate",
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
    <div className="stack__content">
      <h3 className="stack__title">Primary Tools</h3>

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

export default Primary;
