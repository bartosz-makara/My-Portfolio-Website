const stack = [
  {
    id: 1,
    name: "Figma",
    level: "Proficient",
    icon: "bx bxl-figma",
  },
  {
    id: 2,
    name: "TailwindCSS",
    level: "Intermediate",
    icon: "bx bxl-tailwind-css",
  },
  {
    id: 3,
    name: "Typescript",
    level: "Intermediate",
    icon: "bx bxl-typescript",
  },
  {
    id: 4,
    name: "React",
    level: "Intermediate",
    icon: "bx bxl-react",
  },
  {
    id: 5,
    name: "Redux",
    level: "Intermediate",
    icon: "bx bxl-redux",
  },
  {
    id: 6,
    name: "NextJS",
    level: "Intermediate",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 128 128">
        <path
          d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
          fill="#8083A5"
        />
      </svg>
    ),
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
                  {tool.id === 6 ? tool.icon : <i class={tool.icon}></i>}

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
