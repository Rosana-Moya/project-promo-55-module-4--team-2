export const getProjects = () => {
    return fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id_project,
                    projectName: item.project_name,
                    slogan: item.slogan,
                    description: item.description,
                    technologies: item.technologies,
                    projectPhoto: item.photo_url,
                    github: item.github_url,
                    demo: item.demo_url,
                    authorName: item.name,
                    job: item.job,
                    authorPhoto: item.photo
                };
            });
            console.log("data", data)
            console.log("cleanData", cleanData)
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

export const getProjectById = (id) => {
    return fetch(`http://localhost:3000/project/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id_project,
                    projectName: item.project_name,
                    slogan: item.slogan,
                    description: item.description,
                    technologies: item.technologies,
                    projectPhoto: item.photo_url,
                    github: item.github_url,
                    demo: item.demo_url,
                    authorName: item.name,
                    job: item.job,
                    authorPhoto: item.photo
                };
            });

            // Retornar el objeto que hay dentro del array
            return cleanData[0];
        })
        .catch((error) => console.log(error));
};