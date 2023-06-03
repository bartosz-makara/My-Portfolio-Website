import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ScrollUp from "./components/scrollup/ScrollUp";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <main className="main">
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Skills setSelectedPage={setSelectedPage} />
        <Portfolio setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
