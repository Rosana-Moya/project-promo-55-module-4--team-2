const mysql = require("../database/mysql-pool");


const postProject = async (req, res) => {
    try {
        const { project_name, slogan, description, technologies, photo_url, github_url, demo_url, name, job, photo} = req.body;
        
        if (
            typeof project_name !== "string" ||
            project_name.length > 150 ||
            typeof description !== "string" ||
            typeof technologies !== "string" ||
            technologies.length > 255) 
    {
    return res.status(400).json({
        error: "Los campos son obligatorios, deben ser texto y no superar los límites."
    });

} 

        const queryAuthor = "INSERT INTO authors (name, job, photo) VALUES (?,?,?)";   
        const queryProject ="INSERT INTO projects (project_name, slogan, description, technologies, photo_url, github_url, demo_url, fk_author ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        

        const connection = await mysql.getConnection();
        const dataAuthor = await connection.query(queryAuthor, [name, job, photo]);
        await connection.query(queryProject, [project_name, slogan, description, technologies, photo_url, github_url, demo_url, dataAuthor[0].insertId]);
       

        res.status(201).json({ message: "Proyecto creado" }); 
    } catch {
        res.send("Algo ha ido mal");
    }
};

module.exports = {
    postProject
};