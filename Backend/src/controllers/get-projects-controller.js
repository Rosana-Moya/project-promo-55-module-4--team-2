const mysql = require("../database/mysql-pool");

const getProjects = async (req, res) => {
  try {
    const query = "SELECT * FROM projects";
    const connection = await mysql.getConnection();
    const [data] = await connection.query(query);
   

    res.json(data);
  } catch (err) {
    console.error("Error al obtener los proyectos:", err);
    res.status(400).json({ error: "No se han podido obtener los proyectos" });
  }
};


module.exports = {
    getProjects
};

