const Nerd = require('./models/nerd.js');

module.exports = function(app) {
    app.get('/api/nerds', function(req, res) {
        Nerd.find(function(err, nerds) {
            if (err)
                res.send(err)

            res.json(nerds);
        })
    })

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
