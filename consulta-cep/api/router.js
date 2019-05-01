class Router{

    constructor(){
    }

    build(app){
        app
        .route('/cep')
        .get((req,res) => {
            res.json({cep: '31570-140'});
        });

    }
}

module.exports = new Router();