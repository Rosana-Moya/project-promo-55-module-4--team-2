export const getProjects = () => {
    return fetch("https://localhost:3000/projects")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id_project,
                    project_name: item.project_name,
                    slogan: item.slogan,
                    description: item.description,
                    technologies: item.technologies,
                    photo: item.project_url,
                    github: item.github_url,
                    demo: item.demo_url,
                    author_name: item.name,
                    job: item.job,
                    photo_author: item.photo
                };
            });
            return cleanData;
        })
        .catch((error) => {
            console.log(error)
        });
};

export const postProject = (data) => {
    return fetch("http://localhost:3000/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(() => {
            return;
        })
        .catch((error) => {
            console.log(error);
        });
};