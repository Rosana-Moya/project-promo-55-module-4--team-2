import "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById, patchProject } from "../services/api";
import HeaderList from "../components/HeaderList";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import '../styles/detail-page.css';

const DetailPage = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getProjectById(id).then(setProject);
  }, [id]);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const handleDelete = () => {
      patchProject(id).then(() => {
        
            navigate("/list-page");
        })
    };

  return (
    <>
      <HeaderList />
      <div className="button-detail-container">
        <Link to={"/list-page"}>
            <button className="header-button">VOLVER AL LISTADO</button>
        </Link>
      </div>
      <Preview
        name={project.projectName}
        slogan={project.slogan}
        repo={project.github}
        technologies={project.technologies}
        demo={project.demo}
        desc={project.description}
        autor={project.authorName}
        job={project.job}
        authorPhoto={project.authorPhoto}
        projectPhoto={project.projectPhoto}
        id={project.id}
      />
      <div className="button-detail-container">
        <button className="delete-button" onClick={handleDelete}>Eliminar proyecto</button>
      </div>
    <Footer />
    </>
  );
};

export default DetailPage;