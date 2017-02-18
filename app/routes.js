const Nerd = require('../config/db.js');

module.exports = function(app) {
    app.get('/api/nerds', function(res, req) {
        Nerd.find(function(err) {
            if (err)
                res.json(nerds);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

}
