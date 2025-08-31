const {
    getAllSocieties,
    getSocietyByName,
    addSociety,
    updateSociety,
    deleteSociety,
} = require("../models/societyModel")

//get all societies/async means, takes some time to get the data from databse
const handleGetAllSocieties = async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM societies"); //wait until postgresql responds
        res.json(result);

    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

const handleGetSocietyByName = async (req,res) => {
  try {
    const result = await getSocietyByName(req.params.name);
    if(!result) return res.status(404).json({error: "Society Not Found"});
        res.json(result);
    
  } catch (error) {
    res.status(500).json({error: err.message});
  }
};

const handleAddSociety = async (req,res) => {
  try {
    const {name, description, photo_url, tags} = req.body;
    const result = await addSociety(name,description,photo_url,tags);
    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({error: err.message})
  }
};

const handleUpdateSociety = async (req,res) => {
  try {
    const {name, description, photo_url, tags} = req.body;
    const result = await updateSociety(req.params.id, name, description, photo_url, tags);
    if(!result) return res.status(404).json({error: "Society Not Found"});
    res.json(result);
  } catch (error) {
    res.status(500).json({error: err.message})
  }
};


const handleDeleteSociety = async (req,res) => {
  try {
    const deleted = await deleteSociety(req.params.id);
    if(!deleted) return res.status(404).json({error : "Soceity Not Found"});
    res.json({message: "Society deleted", deleted});

} catch (error) {
    res.status(500).json({error: err.message})
  }
};


module.exports = {
    handleGetAllSocieties,
    handleGetSocietyByName,
    handleAddSociety,
    handleUpdateSociety,
    handleDeleteSociety,
};