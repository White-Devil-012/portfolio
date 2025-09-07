import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import expTitle from "../assets/img/exp-title.png";
import microsoftLogo from "../assets/img/microsoft-logo.jpg";
import zupeeLogo from "../assets/img/zupee-logo.avif"
import 'animate.css';
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
  const isInView = useInView(aRef, { once: true });
  const leftControl = useAnimation();
  const rightControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      leftControl.start("visible");
      rightControl.start("visible");
    }
  }, [isInView])

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2><img className="naruto-title" src={expTitle}></img></h2>
        <div ref={aRef} className="experience-items">
        <motion.div
            className="experience-item"
            variants={leftVariants}
            initial="hidden"
            animate={leftControl}
            transition={{ duration: 0.5 }}
          >
            <img src={zupeeLogo} alt="Zupee" className="company-logo" />
            <div className="experience-details">
              <h3>Zupee</h3>
              <p>Software Engineer</p>
              <p>Jul 2025 - Present</p>
              <ul>
                <li>Built a real-time reactions (Emoji) service using WebSockets in Node.js/TypeScript, designed to handle thousands of concurrent users with smooth sub-second latency.</li>
                <li>Designed efficient MongoDB data models to safely issue thousands of scratch cards per day.</li>
                <li>Set up New Relic dashboards and alerts, improving incident detection and cutting response time.</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="experience-item"
            variants={leftVariants}
            initial="hidden"
            animate={leftControl}
            transition={{ duration: 0.5 }}
          >
            <img src={zupeeLogo} alt="Zupee" className="company-logo" />
            <div className="experience-details">
              <h3>Zupee</h3>
              <p>Software Engineer Intern</p>
              <p>Jan 2025 - Jun 2025</p>
              <ul>
                <li>Contributed to backend services in Node.js and TypeScript, enhancing system performance.</li>
                <li>Integrated New Relic monitoring, reducing debugging effort and improving visibility.</li>
                <li>Optimized MongoDB queries, reducing execution time by eliminating redundancies.</li>
              </ul>
            </div>
          </motion.div>
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
              <p>Software Engineer Intern</p>
              <p>May 2024 - Jul 2024</p>
              <ul>
                <li>Built DynaAssist, an AI-powered Chrome extension for Microsoft Dynamics 365 that automated repetitive tasks and boosted user productivity.</li>
                <li>Integrated OpenAI GPT APIs to enable natural language-driven workflows.</li>
                <li>Developed the frontend using React and Manifest V3, ensuring seamless Dynamics 365 integration.</li>
                <li>Conducted extensive testing to ensure automation accuracy and reliability.</li>    
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

