const properties = require('../package.json');
const distance = require('../service/distance');


class Controller{

    constructor(){

    }

    about(req,res){
        let aboutInfo = {
            name : properties.name,
            version : properties.version
        };

        res.json(aboutInfo);
    }

    get_distance(req, res){
        distance.find(req,res, (err,dist) =>{
            if(err)
                res.send(err);
            res.json(dist);
        });
    }

}

module.exports = new Controller();