import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import expTitle from "../assets/img/exp-title.png";
import microsoftLogo from "../assets/img/microsoft-logo.jpg";
import tecnoesisLogo from "../assets/img/tecnoesis-logo.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const leftVariants = {
    hidden: { x: "-100px", opacity: 0 },
    visible: { x: 0, opacity: 1 }
    
}
const rightVariants = {
    hidden: { x: "100px", opacity: 0 },
    visible: { x: 0, opacity: 1 }
    
}

export const Experience = () => {

    const aRef = useRef(null);
    const isInView = useInView(aRef, {once: true});
    const leftControl = useAnimation();
    const rightControl = useAnimation();
    useEffect(() => {
      if(isInView) {
        leftControl.start("visible");
        rightControl.start("visible");
      }
    }, [isInView])
    
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2><img className = "naruto-title" src={expTitle}></img></h2>
        <div ref={aRef} className="experience-items">
          <motion.div
            className="experience-item"
            variants={leftVariants}
            initial="hidden"
            animate={leftControl}
            transition={{ duration: 0.5 }}
          >
                <img src={microsoftLogo} alt="Microsoft" className="company-logo" />
                <div className="experience-details">
                    <h3>Microsoft</h3>
                    <p>Upcoming SWE Intern</p>
                    { /* <p>Date Range 1</p>
                    <p>Description of responsibilities and achievements.</p> */}
                </div>
          </motion.div>
          <motion.div
            className="experience-item"
            variants={rightVariants}
            initial="hidden"
            animate={rightControl}
            transition={{ duration: 0.5 }}
          >
                <img src={tecnoesisLogo} alt="Tecnoesis" className="company-logo" />
                <div className="experience-details">
                    <h3>Tecnoesis</h3>
                    <p>Front-end Developer</p>
                    <p>October 2022 - Present</p>
                    <p>Collaborated with a team of web developers to contribute to the design and implementation of the Tecnoesis
website.</p>
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

