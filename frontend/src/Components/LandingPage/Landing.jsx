import React from "react";
import { Link } from "react-router-dom";
// import rentside from "../../images/rent_side.png"
import AnimateImg from "../AnimateImg/AnimateImg"
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
              
              >Welcome to <span className="logo-name" style={{color:"#ffffff", fontFamily: "Poppins"}}> RentIT </span></motion.h1>
            <motion.p
               variants={textAnimation}
               initial="hidden"
               animate="visible"
            
            > Enjoy your journey with rentIt
            <br /> Booking your vacation with rentIt means you have
            around-the-clock support from day one. <br/> Our team of specialists are
            here to guide you through all of your travel options, answer
            questions, and find you the best deals.At RentIt we get it right, or
            we will make it right.
            </motion.p>
            <motion.p
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <Link className="mylink1" to="/home">Get Started</Link>
            </motion.p>
        </div>
        <div className="img-div">
            <motion.div>
                <AnimateImg></AnimateImg>
              {/* <img src={rentside} alt="" srcset="" className="side-img" /> */}

              
            </motion.div>
    
        </div>
        
      </div>
    </motion.div>
  );
};

export default Landing;
