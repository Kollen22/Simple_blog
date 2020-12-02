const News = require('./DataBase');

class Controller {
    
    async index(req, res){
        const news = await News.find();
        res.send(news);
    }

    async store(req, res){
        const { title, news, author } = req.body;

        if(!title || !news || !author){
            return res.send({ error: "Lacked information!" });
        }

        const nw = await News.create({
            title, news, author,
        });

        req.io.emit('newNews', nw);
        res.json(nw);
    }

}

module.exports = new Controller();