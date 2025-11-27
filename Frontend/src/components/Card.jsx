import "react";
import Avatar from '../images/avatar.webp';
import GitHubLogo from '../images/github.svg';
import GlobeLogo from '../images/globe-solid.svg';


const Card = ({name, slogan, repo, technologies, demo, desc, autor, job, authorPhoto, id}) => {

    return (
       <div className="preview-card" key={id}>
            <div className="personal-info">
                {authorPhoto ? (
                    <img className="avatar" src={authorPhoto} alt="Imagen de la autora del proyecto"/>
                ) : (
                    <img className="avatar" src={Avatar} alt="Imagen de ejemplo de avatar" />
                )}
                <p>{ job ? job : 'Tu puesto o profesión' }</p>
                <h2>{autor ? autor : 'Tu nombre'}</h2>
            </div>
            <div className="project-info">
                <h2>{ name ? name : 'Nombre de tu proyecto'}</h2>
                <h3>{slogan ? slogan : 'Slogan'}</h3>
                <p>{desc ? desc : 'Descripción del proyecto'}</p>
                <p>{repo ? repo : 'Tu Repositorio'}</p>
                <p>{demo ? demo : 'Tu Demo'}</p>
                <div className="tech-info">
                    <p>{technologies ? technologies: 'Tecnologías usadas'}</p>
                    <a href={demo}>
                        <img className="globe-logo" src={GlobeLogo} alt="enlace a la demo del proyecto" />
                    </a>
                    <a href={repo}>
                        <img className="github-logo" src={GitHubLogo} alt="enlace al repositorio en GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;