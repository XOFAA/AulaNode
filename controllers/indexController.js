const path = require("path")
module.exports = class IndexController{
    static helloNode(req,res){
        res.send('Ultilzando Controllers');
    }
    static html(req,res){
        res.send(path.resolve('index.html'));
    }
}