const { postProject } = require ("./post-project-controller");
const { getProjects } = require ("./get-projects-controller");
const { getProjectId } = require ("./get-project-id-controller");
const { patchProjectId } = require ("./patch-project-controller");

module.exports = {
    postProject,
    getProjects,
    getProjectId,
    patchProjectId
};