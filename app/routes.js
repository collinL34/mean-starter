const Nerd = require('./models/food.js');

module.exports = function(app) {
    app.get('/api/foods', function(req, res) {
        Food.find(function(err, foods) {
            if (err)
                res.send(err)

            res.json(foods);
        })
    })

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
