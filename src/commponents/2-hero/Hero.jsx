import "./HeroCss.css";
import Lottie from "lottie-react";
import developerAnimation from "/src/animation/developer.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="hero flex">
      <div className="info">
        <div className="flex imgname">
          <div className="avatar">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 5, type: "spring", stiffness: 100 }}
              src="/myavatar.png"
              alt=""
            ></motion.img>
            <span className="icon-verified"></span>
          </div>
          <div className="name">
            <motion.h1
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "tween", ease: "linear", duration: 1 }}
            >
              Elshaowky
            </motion.h1>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front End Developer, HTML, CSS, JavaScript, Bootstrap, React, SASS,
          Pugjs, Next.js, and Material-UI.
        </motion.h1>
        <h4 className="subtitle">
          I&apos;m Mohamed Elshaowky, a passionate Front End Developer skilled
          in Bootstrap, React, Next.js, and Material-UI. I create engaging,
          responsive web applications, focusing on user experience and blending
          aesthetics with functionality. Explore my portfolio to see how I bring
          ideas to life!
        </h4>
        <div className="socail">
          <a
            href="https://www.facebook.com/profile.php?id=100026426761580"
            target="_blank"
            className="icon icon-facebook"
          ></a>
          <a
            href="https://x.com/MoElshaowky"
            target="_blank"
            className="icon icon-x"
          ></a>
          <a
            href="https://github.com/Mohamed-Elshaowky"
            target="_blank"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mohamed-elshaowky-235165335/"
            target="_blank"
            className="icon icon-linkedin"
          ></a>
        </div>
      </div>
      <div className="anmiation">
        <Lottie
          style={{ height: 400, width: 350 }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
