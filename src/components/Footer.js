import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import instaIcon from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="/"><img className="foot-logo" src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{paddingTop: 50}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/piyush-kumar-6517a4222/" target="blank"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="https://github.com/White-Devil-012" target="blank"><img src={githubIcon} alt="Icon" /></a>
              <a href="https://www.instagram.com/piyush.kum__01?utm_source=qr&igsh=MWw1anpvcjA3cTcwYg==" target="blank"><img src={instaIcon} alt="Icon" /></a>
            </div>
            <p>@White_Devil</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
