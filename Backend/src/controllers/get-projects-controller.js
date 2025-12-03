const mysql = require("../database/mysql-pool");

const getProjects = async (req, res) => {
  try {
    const query = "SELECT * FROM projects INNER JOIN authors ON projects.fk_author = authors.id_author WHERE deleted_at IS NULL";
    const connection = await mysql.getConnection();
    const [data] = await connection.query(query);
   

    res.json(data);
  } catch {
    res.status(400).json({ error: "No se han podido obtener los proyectos" });
  }
};


module.exports = {
    getProjects
};

