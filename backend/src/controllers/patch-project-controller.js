const mysql = require("../database/mysql-pool");
const patchProjectId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).send("id inválido");
        }
        const query = "UPDATE projects SET deleted_at = NOW() WHERE id_project = ?";
        const connection = await mysql.getConnection();
        await connection.query(query, [id]);
        await connection.end();
        res.json({ message: "Proyecto eliminado" });
    } catch {
        res.status(500).send("Algo ha ido mal");
    }
};
module.exports = {
    patchProjectId
};