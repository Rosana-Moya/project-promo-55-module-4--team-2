import "react";
import ls from '../services/localStorage';
import { Link } from "react-router-dom";
import HeaderList from "../components/HeaderList";
import Card from "../components/Card";
import Footer from "../components/Footer";
import '../styles/list-page.css';

const ListPage = () => {

const initialProjects =[
    {
        name: "Proyecto 1",
        slogan: "Slogan del proyecto 1",
        repo: "Repositorio del proyecto 1",
        demo : "Demo del proyecto 1",
        technologies: "Tecnologías del proyecto 1",
        desc: "Descripción del proyecto 1",
        autor: "Autor del proyecto 1",
        job: "Puesto del autor 1",
        id:"1"
    },
    {
        name: "Proyecto 2",
        slogan: "Slogan del proyecto 2",
        repo: "Repositorio del proyecto 2",
        demo : "Demo del proyecto 2",
        technologies: "Tecnologías del proyecto 2",
        desc: "Descripción del proyecto 2",
        autor: "Autor del proyecto 2",
        job: "Puesto del autor 2",
        id:"2"
    },

];  

const addedProjects = ls.get ("AddedProjects", [])

const projects = [...initialProjects, ...addedProjects]

     return (
     <>
      <HeaderList />

      <ul className="projects-list">
        {projects
          .filter((project) => project.id)
          .map((project) => (
            <li key={project.id}>
              <Card
                name={project.name}
                slogan={project.slogan}
                repo={project.repo}
                technologies={project.technologies}
                demo={project.demo}
                desc={project.desc}
                autor={project.autor}
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