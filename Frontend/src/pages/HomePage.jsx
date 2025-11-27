import { useState } from "react";
import ls from '../services/localStorage';
import Header from "../components/Header";
import Preview from "../components/Preview";
import Form from "../components/Form";
import Footer from '../components/Footer';
import '../styles/home-page.css';

const HomePage = () => {

    const [ name, setName ] = useState(ls.get("name") || "");
    const [ slogan, setSlogan ] = useState(ls.get("slogan") || "");
    const [ repo, setRepo ] = useState(ls.get("repo") || "");
    const [ demo, setDemo ] = useState(ls.get("demo") || "");
    const [ technologies, setTechnologies ] = useState(ls.get("technologies") || "");
    const [ desc, setDesc ] = useState(ls.get("desc") || "");
    const [autor, setAutor] = useState(ls.get("autor") || "");
    const [job, setJob] = useState(ls.get("setJob") || "");
    const [ projectPhoto, setProjectPhoto ] = useState(ls.get("projectPhoto") || "");
    const [ authorPhoto, setAuthorPhoto ] = useState(ls.get("authorPhoto") || "");

    const updateName = (value) => {
        setName (value);
        ls.set("name", value);
    }

    const updateSlogan = (value) => {
        setSlogan (value);
        ls.set("slogan", value);
    }
    
    const updateRepo = (value) => {
        setRepo (value);
        ls.set("repo", value);
    }

    const updateTechnologies = (value) => {
        setTechnologies (value);
        ls.set("technologies", value);
    }
    
    const updateDemo = (value) => {
        setDemo (value);
        ls.set("demo", value);
    }

    const updateDesc = (value) => {
        setDesc (value);
        ls.set("desc", value);
    }

    const updateAutor = (value) => {
        setAutor(value);
        ls.set("autor", value);
    }

    const updateJob = (value) => {
        setJob(value);
        ls.set("setJob", value);
    }

    const updateProjectPhoto = (fileBase64) => {
        setProjectPhoto(fileBase64);
        ls.set("projectPhoto", fileBase64);
    };

    const updateAuthorPhoto = (fileBase64) => {
        setAuthorPhoto(fileBase64);
        ls.set("authorPhoto", fileBase64);
    };

    return (
        <>
            <Header />
            <div className="main-page">
                <Preview
                    name={name}
                    slogan={slogan}
                    repo={repo}
                    technologies={technologies}
                    demo={demo}
                    desc={desc}
                    autor={autor}
                    job={job}
                    projectPhoto={projectPhoto}
                    authorPhoto={authorPhoto}
                />
                <Form
                    updateName={updateName}
                    name={name}
                    updateSlogan={updateSlogan}
                    slogan={slogan}
                    updateRepo={updateRepo}
                    repo={repo}
                    updateTechnologies={updateTechnologies}
                    technologies={technologies}
                    updateDemo={updateDemo}
                    demo={demo}
                    updateDesc={updateDesc}
                    desc={desc}
                    autor={autor}
                    job={job}
                    updateAutor={updateAutor}
                    updateJob={updateJob}
                    updateProjectPhoto={updateProjectPhoto}
                    updateAuthorPhoto={updateAuthorPhoto}
                />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;




