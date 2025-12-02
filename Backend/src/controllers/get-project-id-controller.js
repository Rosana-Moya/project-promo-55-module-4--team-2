const mysql = require("../database/mysql-pool");

const getProjectId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).send("id inválido");
        }
        const query = "SELECT * FROM projects INNER JOIN authors ON projects.fk_author = authors.id_author WHERE id_project = ?";
        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);
        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");
    }
}

module.exports = {
    getProjectId
};