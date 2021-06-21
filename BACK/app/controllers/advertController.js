const db = require('../database');
const { Advert } = require('../models/index');

const advertController = {

    async getAllAdverts(req, res) {
        try {
            const adverts = await Advert.findAll();
            res.json(adverts);
        } catch (error) {
            res.status(400).json(error.message)
        }
    },

    getFilteredAdverts : async (request, response) => {

        const query = request.query;
        try {
            const adverts = await Advert.findFilteredAdverts(query);
            response.json(adverts);
        } catch (error) {
            response.status(400).json(error.message);
        }
    },

    getOneAdvert : async (request, response) =>  {

        try {
            const { id } = request.params;

            const advertId = await Advert.findOne(id);

            response.json(advertId);

        } catch (error) {
            response.status(404).json(error.message);
        }
    },

    newAdvert : async (request, response) => {
        
        console.log(request.file);

        request.body.categories = JSON.parse(request.body.categories);
        request.body.advertImage = 'http://localhost:6050/uploads/' + request.file.filename;
        const theAdvert = new Advert(request.body);
        theAdvert.userId = request.user.id;
        console.log(theAdvert);
    
        try {
            
            const result = await Advert.save(theAdvert);
    
            response.json(result);
        } catch (err) {
            response.status(403).json(err.message);
        }
    },

    patchAdvert : async (request, response) => {
        const theAdvert = new Advert(request.body);
        theAdvert.id = request.params.id;

        try{
            const result = await Advert.update(theAdvert);
            response.json(result);
        }catch (err) {
            response.status(404).json(err.message);
        }
    },

    deleteOneAdvert: async (req, res) => {
        const user = req.user;
        try {
            const result = await Advert.deleteOne(parseInt(req.params.id, 10), user);
            res.json(result)
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    getAdvertsOfUser: async (req, res) => {
        try {
            const result = await Advert.findUserAdverts(parseInt(req.user.id, 10));
            res.json(result)
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    getMostRecent: async (req, res) => {
        try {
            const result = await Advert.findMostRecent();
            res.json(result);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

};

module.exports = advertController;

