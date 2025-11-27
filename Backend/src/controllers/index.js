const { postProject } = require ("./post-project-controller");
const { getProjects } = require ("./get-projects-controller.js");
const { getProjectId } = require ("./get-project-id-controller.js")



module.exports = {
    postProject,
    getProjects,
    getProjectId,
};