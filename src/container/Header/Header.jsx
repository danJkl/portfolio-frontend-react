import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { Animation2, Background } from "../../components";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 4 }}
      className="wrapfirst"
    >
      <Background />
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div className="">
            <h1 className="head-text2">
              Welcome To <br /> My Personal Portfolio
            </h1>
            <p className="p-text2">Base in Thailand</p>
            <p className="text-info">
              This portfolio website showcases my work and experience as a
              Developer. It serves as a platform to share my skills,
              accomplishments, and personal project with the world. Thank you
              for visiting, and I hope you enjoy exploring my portfolio. Feel
              free to get in touch if you have any questions or want to learn
              more about my work
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="animation"
        >
          {/* <Animation2 /> */}
        </motion.div>

        {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Danuphan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">Software developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div> */}
      </div>
    </motion.div>
  );
};

export default AppWrap(Header, "home");
