exports.index = function (req, res) {
    res.render('home', {title: 'Ben Burwell'});
};

exports.project_index = function(req, res) {
    res.render('home', {title: 'Projects — Ben Burwell'});
};

exports.resume = function(req, res) {
    res.render('home', { title: 'Résumé — Ben Burwell' });
};

exports.writing = function(req, res) {
    res.render('home', { title: 'Writing — Ben Burwell'});
};
