const catServices = require("../services/catServices");

module.exports = {
  create: async (req, res) => {
    try {
      const cat = await catServices.create(req.body);
      res.status(201).send({ cat });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getCats: async (req, res) => {
    try {
      const cats = await catServices.getCats();
      res.status(200).send({ cats });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getCat: async (req, res) => {
    try {
      const cat = await catServices.getCat(req.params.id);
      res.status(200).send({ cat });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  updateCat: async (req, res) => {
    try {
      const cat = await catServices.getCat(req.params.id);
      const updatedCat = await catServices.updateCat(cat, req.body);
      res.status(200).send({ cat: updatedCat });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  deleteCat: async (req, res) => {
    try {
      const cat = await catServices.getCat(req.params.id);
      await catServices.updateCat(cat, {is_active: false});
      res.status(200).send({ message: 'Gato exterminado' });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
};
