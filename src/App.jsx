import Hero from "./commponents/2-hero/Hero";
import Header from "./commponents/1-header/Header";
import Main from "./commponents/3-main/Main";
import Contact from "./commponents/4-contact/Contact";
import Footer from "./commponents/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  // Handle scroll
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > "300") {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up" style={{ opacity: scroll ? 1 : 0, transition: "1s" }}>
        <button className="scrollTop icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
