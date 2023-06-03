import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work4,
    title: "UI + Database",
    description: "React, Typescript, TailwindCSS, NextJS, Prisma, Supabase",
    category: "originals",
    github: "https://github.com/bartosz-makara/Blog-Project",
  },
  {
    id: 2,
    image: Work2,
    title: "Responsive UI + Auth + Basket",
    description:
      "React, Typescript, TailwindCSS, NextJS, Redux, Stripe, Sanity",
    category: "originals",
    github: "https://github.com/bartosz-makara/E-Commerce-Project",
  },
  {
    id: 3,
    image: Work3,
    title: "Responsive UI",
    description: "React, Javascript, CSS",
    category: "originals",
    github: "",
  },
  {
    id: 4,
    image: Work1,
    title: "Responsive UI",
    description: "React, Typescript, TailwindCSS",
    category: "originals",
    github: "https://github.com/bartosz-makara/SPA-Project-1",
  },
  {
    id: 5,
    image: Work5,
    title: "UI + Auth",
    description: "React, Typescript, TailwindCSS, NextJS, Firebase",
    category: "clones",
    github: "",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "originals",
  },
  {
    name: "clones",
  },
];
