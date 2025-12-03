export const getProjects = () => {
    return fetch("http://localhost:3000/api/projects")
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
            return cleanData;
        });
};

export const postProject = (data) => {
    return fetch("http://localhost:3000/api/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(() => {
            return;
        });
};

export const patchProject = (id) => {
    return fetch(`http://localhost:3000/api/delete-project/${id}`, {
        method: "PATCH",
    })
        .then((response) => response.json())
        .then(() => {

            return;
        });
};

export const getProjectById = (id) => {
    return fetch(`http://localhost:3000/api/project/${id}`)
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
            return cleanData[0];
        })
};