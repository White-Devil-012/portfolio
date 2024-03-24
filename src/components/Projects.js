import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import drum from "../assets/img/drum-kit.jpg";
import tindog from "../assets/img/tindog.jpg";
import weather from "../assets/img/weather.jpg";
import proj from "../assets/img/proj-title.png";
import yaadein from "../assets/img/yaadein.jpg";
import portfolio from "../assets/img/portfolio.jpg"
import cashtrack from "../assets/img/cashtrack.jpg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CashTrack (Group Project)",
      description: "Expense Tracker Web App (In Progress. Stay Tuned!)",
      imgUrl: cashtrack,
      githubLink: "https://github.com/flip360pranjit/CashTrack.client",
    },
    {
      title: "Portfolio",
      description: "My portfolio site",
      imgUrl: portfolio,
      githubLink: "https://github.com/White-Devil-012/Portfolio",
      websiteLink: "https://piyushkumar01.netlify.app",
    },
    {
      title: "Yaadein",
      description: "Social Web App (In Progress. Stay Tuned!)",
      imgUrl: yaadein,
      githubLink: "https://github.com/White-Devil-012/Yaadein.client",
    },
    {
      title: "Weather App",
      description: "Delivers precise weather updates",
      imgUrl: weather,
      githubLink: "https://github.com/White-Devil-012/Weather-App", // Add GitHub link
      websiteLink: "https://white-devil-012.github.io/Weather-App/",
    },
    {
      title: "TinDog",
      description: "Tinder for dogs",
      imgUrl: tindog,
      githubLink: "https://github.com/White-Devil-012/TinDog", // Add GitHub link
      websiteLink: "https://white-devil-012.github.io/TinDog/",
    },
    {
      title: "Drum Kit",
      description: "Interactive Drum Kit Web App",
      imgUrl: drum,
      githubLink: "https://github.com/White-Devil-012/Drum-Kit", // Add GitHub link
      websiteLink: "https://white-devil-012.github.io/Drum-Kit/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2><img className = "naruto-title" src={proj}></img></h2>
                <p>Crafting immersive web experiences and engineering solutions with precision, each project reflects the spirit of innovation inherent in a shinobi's heart. Explore the arsenal of my creations below, where every endeavor is a testament to the artistry and ingenuity of a true ninja.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubLink={project.githubLink} // Pass GitHub link as prop
                              websiteLink={project.websiteLink} // Pass website link as prop
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
