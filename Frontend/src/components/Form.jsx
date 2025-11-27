import "react";
import ls from '../services/localStorage';

const Form = ({ updateProjectPhoto, updateAuthorPhoto, name, updateName, slogan, updateSlogan, updateRepo, repo, updateDemo, demo, updateTechnologies, technologies, updateDesc, desc, autor, job, updateAutor, updateJob }) => {

  const handleChangeProjectPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProjectPhoto(reader.result);
      };
    reader.readAsDataURL(file);
    }
  };

  const handleChangeAuthorPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateAuthorPhoto(reader.result);
      };
    reader.readAsDataURL(file);
    }
  };

  const handleChangeName = (ev) => {
    updateName (ev.target.value)}
  const handleChangeSlogan = (ev) => {
    updateSlogan (ev.target.value)}
  const handleChangeRepo = (ev) => {
    updateRepo (ev.target.value)}
  const handleChangeDemo = (ev) => {
    updateDemo (ev.target.value)}
  const handleChangeTechnologies = (ev) => {
    updateTechnologies (ev.target.value)}
  const handleChangeDesc = (ev) => {
    updateDesc (ev.target.value)}

  const handleAutor = (ev) => updateAutor(ev.target.value);
  const handleJob = (ev) => updateJob(ev.target.value);

  const handleAddProject = (ev) => {
    ev.preventDefault()
    const newProject = {
      name, slogan, repo, demo, technologies, desc, autor, job, projectPhoto: ls.get("projectPhoto"), authorPhoto: ls.get("authorPhoto"), id: JSON.stringify(Math.floor(Math.random() * 100))
  }
    const previousProjects = ls.get ("AddedProjects", [])  
    ls.set ("AddedProjects", [...previousProjects, newProject])
    updateName("")
    updateSlogan("")
    updateRepo("")
    updateDemo("")
    updateTechnologies("")
    updateDesc("")
    updateAutor("")
    updateJob("")
    updateProjectPhoto("")
    updateAuthorPhoto("")
  }

  return (
    <div className="form-container">
       <h1>Información</h1>
        <h2 className="form-paragraph">Cuéntanos sobre el proyecto</h2>
          <form className="form">
                <label className="hidden-label" htmlFor="name">Nombre del proyecto</label>
                <input name="name" id="name" required placeholder="Nombre del proyecto" value={name} onChange={handleChangeName}/>
                <label className="hidden-label" htmlFor="slogan">Slogan del proyecto</label>
                <input name="slogan" id="slogan" required placeholder="Slogan del proyecto" value={slogan} onChange={handleChangeSlogan}/>
                <label className="hidden-label" htmlFor="repo">Repo</label>
                <input name="repo" id="repo" required placeholder="Repositorio" value={repo} onChange={handleChangeRepo}/>
                <label className="hidden-label" htmlFor="demo">Demo</label>
                <input name="demo" id="demo" required placeholder="Demo" value={demo} onChange={handleChangeDemo}/>
                <label className="hidden-label" htmlFor="technologies">Tecnologías</label>
                <input name="technologies" required id="technologies" placeholder="Tecnologías" value={technologies} onChange={handleChangeTechnologies}/>
                <label className="hidden-label" htmlFor="desc">Descripción</label>
                <input name="desc" id="desc" required placeholder="Descripción" value={desc} onChange={handleChangeDesc}/>
            
          <h2 className="form-paragraph">Cuéntanos sobre la autora</h2>
            <label className="hidden-label" htmlFor="autor">Nombre de la autora</label>
            <input type="text" id="autor" name="autor" value={autor} onChange={handleAutor} placeholder="Nombre" />
            <label className="hidden-label" htmlFor="job">Trabajo de la autora</label>
            <input type="text" id="job" name="job" value={job} onChange={handleJob} placeholder="Trabajo" />

          <div className="button-group">
            <label htmlFor="project-photo">Subir foto del proyecto</label>
            <input className="button-input" type="file" name="project-photo" id="project-photo" onChange={handleChangeProjectPhoto} accept="image/*"/>
            <label htmlFor="author-photo">Subir foto de la autora</label>
            <input className="button-input" type="file" name="author-photo" id="author-photo" onChange={handleChangeAuthorPhoto} accept="image/*"/>
          </div>

          <div>
              <button className="create-button" type="submit" onClick={handleAddProject}>Crear proyecto</button>
          </div>
        </form>

    </div>
  );
};

export default Form;

    
 


