const pool = require("../config/db");

//get all societies
const getAllSocieties = async () => {
    const result = await pool.query("SELECT * FROM societies ORDER BY society_name");
    return result.rows;
};

//getting society by name
const getSocietyByName = async (name) => {
    const result = await pool.query("SELECT * FROM soceities WHERE society_name = $1", [name]);
    return result.rows;

};

//adding a new society

const addSociety = async (name, description, photo_url, tags) => {
    const resuly = await pool.query("INSERT INTO societies (name, description, photo_url, tags) VALUES ($1, $2, $3, $4) returning *", [name,description,photo_url, tags]);
    return result.rows[0];

};

//updating a society

const updateSociety = async (id, name, description, photo_url, tags) => {
    const result = await pool.query("update societies set name = $1, description = $2, photo_url = $3, tags = $4, updated_at = NOW() WHERE society_id = $5 returning *",[name, description, photo_url,tags,id]);
    return result.rows[0];
};

const deleteSociety = async (id) => {
    const result = await pool.query("DELETE FROM societies where society_id = $1",[name]);
    return result.rows[0];

};

module.exports = {
    getAllSocieties,
    getSocietyByName,
    addSociety,
    updateSociety,
    deleteSociety,
};