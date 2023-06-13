import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work4,
    title: "Responsive UI + Database",
    description: "React, Typescript, TailwindCSS, NextJS, Prisma, Supabase",
    category: "originals",
    github: "https://github.com/bartosz-makara/Blog-Project",
    website: "https://blog-project-v2.vercel.app",
    deployed: true,
  },
  {
    id: 2,
    image: Work2,
    title: "Responsive UI + Auth + Basket",
    description:
      "React, Typescript, TailwindCSS, NextJS, Redux, Stripe, Sanity",
    category: "originals",
    github: "https://github.com/bartosz-makara/E-Commerce-Project",
    website: "https://e-commerce-project-coral.vercel.app",
    deployed: true,
  },
  {
    id: 3,
    image: Work3,
    title: "Responsive UI",
    description: "React, Javascript, CSS",
    category: "originals",
    github: "https://github.com/bartosz-makara/My-Portfolio-Website",
    website: "/",
    deployed: true,
  },
  {
    id: 4,
    image: Work1,
    title: "Responsive UI",
    description: "React, Typescript, TailwindCSS",
    category: "originals",
    github: "https://github.com/bartosz-makara/SPA-Project-1",
    website: "https://spa-project-virid.vercel.app",
    deployed: true,
  },
  {
    id: 5,
    image: Work5,
    title: "Responsive UI + Auth + Subscription",
    description: "React, Typescript, TailwindCSS, NextJS, Firebase, Stripe",
    category: "clones",
    github: "https://github.com/bartosz-makara/Netflix-Reconstructed",
    website: "",
    deployed: false,
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
