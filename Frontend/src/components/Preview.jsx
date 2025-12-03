import  "react";
import PreviewExample from '../images/ebook-example.jpg';
import Card from '../components/Card';
import PropTypes from "prop-types";

const Preview = ({name, slogan, repo, technologies, demo, desc, autor, job, projectPhoto, authorPhoto}) => {
  
    return (
      <div className="preview-container">
        <div>
          {projectPhoto ? (
            <img className="preview-image" src={projectPhoto} alt="Previsualización del proyecto"/>
          ) : (
            <img src={PreviewExample} alt="Imagen de ejemplo del proyecto" />
          )}
        </div>
        <Card
        name={name}
        slogan={slogan}
        repo={repo}
        technologies={technologies}
        demo={demo}
        desc={desc}
        autor={autor}
        job={job}
        authorPhoto={authorPhoto}
        />
      </div>
    );
};

export default Preview;

Preview.propTypes = {
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    projectPhoto: PropTypes.string.isRequired,
    authorPhoto: PropTypes.string.isRequired,
}