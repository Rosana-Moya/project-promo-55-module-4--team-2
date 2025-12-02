import "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById } from "../services/api";
//import ls from "../services/localStorage";
import HeaderList from "../components/HeaderList";
import Preview from "../components/Preview";
import Footer from "../components/Footer";

const DetailPage = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id).then(setProject);
  }, [id]);

  // const initialProjects = [
  //   {
  //     name: "Proyecto 1",
  //     slogan: "Slogan del proyecto 1",
  //     repo: "Repositorio del proyecto 1",
  //     demo: "Demo del proyecto 1",
  //     technologies: "Tecnologías del proyecto 1",
  //     desc: "Descripción del proyecto 1",
  //     autor: "Autor del proyecto 1",
  //     job: "Puesto del autor 1",
  //     id: "1",
  //   },
  //   {
  //     name: "Proyecto 2",
  //     slogan: "Slogan del proyecto 2",
  //     repo: "Repositorio del proyecto 2",
  //     demo: "Demo del proyecto 2",
  //     technologies: "Tecnologías del proyecto 2",
  //     desc: "Descripción del proyecto 2",
  //     autor: "Autor del proyecto 2",
  //     job: "Puesto del autor 2",
  //     id: "2",
  //   },
  // ];

  // const addedProjects = ls.get("AddedProjects", []);
  // const projects = [...initialProjects, ...addedProjects];

  // const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <>
      <HeaderList />
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
    <Footer />
    </>
  );
};

export default DetailPage;