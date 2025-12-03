import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../services/api";
import HeaderList from "../components/HeaderList";
import Card from "../components/Card";
import Footer from "../components/Footer";
import '../styles/list-page.css';

const ListPage = () => {

const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
        })
    }, []);

     return (
     <>
      <HeaderList />

      <ul className="projects-list">
        {projects
          .filter((project) => project.id)
          .map((project) => (
            <li key={project.id}>
              <Card
                name={project.projectName}
                slogan={project.slogan}
                repo={project.github}
                technologies={project.technologies}
                demo={project.demo}
                desc={project.description}
                autor={project.authorName}
                job={project.job}
                authorPhoto={project.authorPhoto}
                id={project.id}
              />
              <div className="button-container">
                <Link to={`/detail-page/${project.id}`}>
                  <button className="detail-button">Mira el detalle del proyecto</button>
                </Link>
              </div>
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
};


export default ListPage;