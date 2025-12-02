import "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById } from "../services/api";
import HeaderList from "../components/HeaderList";
import Preview from "../components/Preview";
import Footer from "../components/Footer";

const DetailPage = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id).then(setProject);
  }, [id]);

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