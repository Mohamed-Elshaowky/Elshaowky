import { useEffect, useState } from "react";
import "./HeaderCss.css";

const linksarr = [
  { title: "About", hreff: "#hero" },
  { title: "Projects", hreff: "#projects" },
  { title: "Contact", hreff: "#contact" },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  // Handle Mode
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add(mode);
    } else {
      document.body.classList.remove("light");
      document.body.classList.add(mode);
    }
  }, [mode]);

  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => setShowModal(true)}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          {linksarr.map((link) => {
            return (
              <li key={link}>
                <a href={link.hreff}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        // Handle Mode
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            mode === "dark" ? "light" : "dark"
          );
          // Get Value from LS
          setMode(localStorage.getItem("currentMode"));
          if (mode === "dark") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }}
        className="mode"
      >
        <span className={mode === "light" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li className="closebutton">
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            {linksarr.map((link) => {
              return (
                <li key={link}>
                  <a onClick={() => setShowModal(false)} href={link.hreff}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
