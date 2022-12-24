import React from "react";
import { Link } from "react-router-dom";
import rentside from "../../images/rent_side.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import "./Landing.css";

// initial={"offscreen"}
// whileInView={"onscreen"}
// viewport={{once:false,amount:0.7}}
// transition={{staggerChildren:0.5}}

const navAnimation = {
  hidden: {
    x: 1400,
    opacity: 0,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 5,
  },
};

const textAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 5 },
  },
};

const pagesAnimation = {
  hidden: {
    opacity: 0,
    x: -300,
    y: 0,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: { delay: 0.3, duration: 4, type: "spring" },
  },
};

const Landing = () => {
  return (
    <motion.div
      variants={pagesAnimation}
      initial="hidden"
      animate="visible"
      className="all-content"
    >
      <div variants={navAnimation} inherit="hidden" animate="visible">
        <Navbar />
      </div>

      <div className="main-content">
        <div className="inner-content">
          <motion.h1
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            Welcome to{" "}
            <span style={{ color: "#3591ca", fontFamily: "Poppins" }}>
              {" "}
              RentIT{" "}
            </span>
          </motion.h1>
          <motion.p variants={textAnimation} initial="hidden" animate="visible">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s,
            <br /> when an unknown printer took a galley of type and scrambled
            it to make a type <br /> specimen book. It has survived not only
            five centuries, but also the leap into <br /> electronic
            typesetting, remaining essentially unchanged. <br /> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Earum quam ipsa velit
            culpa, <br /> vero soluta voluptatum voluptatibus doloribus,
            laudantium assumenda deserunt <br /> vel qui nisi necessitatibus
            nulla nobis voluptate mollitia unde.
          </motion.p>
          <motion.p variants={textAnimation} initial="hidden" animate="visible">
            <Link className="mylink1" to="/home">
              Get Started
            </Link>
          </motion.p>
        </div>
        <div className="img-div">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              default: {
                duration: 5.5,
                ease: [0, 0.71, 0.2, 1.04],
              },
              scale: {
                type: "spring",
                damping: 2,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
          >
            <img src={rentside} alt="" srcset="" className="side-img" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
