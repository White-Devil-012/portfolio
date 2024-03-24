import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, websiteLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="proj-card-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="links">
            {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" >GitHub</a>} <br />
            {websiteLink && <a href={websiteLink} target="_blank" rel="noopener noreferrer">Website</a>}
          </div>
        </div>
      </div>
    </Col>
  );
}
