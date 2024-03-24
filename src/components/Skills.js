import cpp from "../assets/img/C++.png";
import java from "../assets/img/java.jpg";
import html from "../assets/img/html.webp";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.webp";
import reactjs from "../assets/img/react.png";
import nodejs from "../assets/img/node.png";
import mongodb from "../assets/img/mongodb.png";
import skill from "../assets/img/skill-title.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2><img className="naruto-title skill-title" src={skill}></img></h2>
                        <p>In the world of shinobi, mastery over various techniques defines one's strength and resilience. With the agility of a Leaf Village ninja and the determination of a shinobi on a mission, I bring forth my arsenal of skills to the forefront. Explore below to witness the fusion of technology and ninja artistry, forged through dedication and passion.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={cpp} alt="Image" className="circular-image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" className="circular-image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" className="circular-image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" className="circular-image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" className="circular-image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="Image" className="circular-image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" className="circular-image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" className="circular-image" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
