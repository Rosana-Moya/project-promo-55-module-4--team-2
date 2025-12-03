const express = require("express");
const cors = require("cors");
const path = require("path");
const { postProject, getProjects, getProjectId, patchProjectId } = require("./controllers");
const app = express();
const port = process.env.DB_PORT || 3000;

require("dotenv").config();

app.use(express.json({ limit: "25mb" }));
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/api/project", postProject);
app.get("/api/projects", getProjects);
app.get("/api/project/:id",getProjectId);
app.patch("/api/delete-project/:id", patchProjectId);
app.use("/project-promo-55-module-3-team-2", express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
