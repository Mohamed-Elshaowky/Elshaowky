import { useState } from "react";
import "./MainCss.css";
import { myProjects } from "./myprojects";
import { AnimatePresence, motion } from "framer-motion";
function Main() {
  const [projects, setProjects] = useState(myProjects);
  const [active, setActive] = useState("all");

  const filterClick = (buttoncategory) => {
    setActive(buttoncategory);
    const projectsArr = myProjects.filter((project) => {
      const cat = project.category.filter((mycat) => {
        return mycat === buttoncategory;
      });
      return cat[0] === buttoncategory;
    });
    setProjects(projectsArr);
  };

  return (
    <main className="flex" id="projects">
      <section className="left-section flex">
        <button
          onClick={() => {
            setActive("all"), setProjects(myProjects);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            filterClick("css");
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => filterClick("js")}
          className={active === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            filterClick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {projects.map((item) => {
            return (
              <motion.article
                key={item.id}
                className="card"
                layout
                initial={{ transform: "scale(0.85)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              >
                <img src={item.img} alt=""></img>
                <div className="box">
                  <h2 className="title">{item.title}</h2>
                  <p className="subtitle">{item.description}</p>
                  <div className="icons flex">
                    <div className="flex">
                      <a
                        href={item.linkgit}
                        target="_blank"
                        className="icon-github"
                      ></a>
                      <a
                        href={item.linkpro}
                        target="_blank"
                        className="icon-link"
                      ></a>
                    </div>
                    <a
                      href={item.linkpro}
                      target="_blank"
                      className="icon-arrow flex"
                    >
                      more
                      <div className="icon-arrow-right"></div>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
