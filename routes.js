var fs = require('fs');
var marked = require('marked');

var marked_options = {
    gfm: true,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: true,
    sanitize: false,
    pedantic: false
}

function parseDirectory(type, callback) {
    fs.readdir('content/' + type, function (err, files) {
        
        if (err) {

            callback({error: 'Unable to read from directory'}, null);

        } else {

            var documents = [];
            var pending = files.length;

            if (!files) {
                callback(null, null);
            }

            files.forEach(function (file) {
                parseFile(type, file, function (err, data) {
                    if (err === null) {
                        documents.push(data);
                    }
                    pending--;

                    if (pending === 0) {
                        callback(null, documents);
                    }
                });
            });

        }

    });
};

function parseFile(type, filename, callback) {
    var doc = {
        link: '/' + type + '/' + filename.split('.md')[0] + '/',
        content: ''
    };

    fs.readFile('content/' + type + '/' + filename, 'utf8', function (err, data) {

        if (err) {
            callback({error:'could not read file'}, null);
        }

        var lines = data.split("\n");

        for (var i = 0; i < 3; i++) {
            
            chunks = lines[i].split(': ');

            if (chunks[0] === 'Title') {
                doc.title = chunks[1];
            
            } else if (chunks[0] === 'Date') {
                doc.date = chunks[1];
            
            } else if (chunks[0] === 'Description') {
                doc.description = chunks[1];
            }
        }

        for (var i = 3; i < lines.length; i++) {
            doc.content += lines[i] + "\n";
        }

        callback(null, doc);
    });
}

exports.index = function (req, res) {
    res.render('home', {
        title: 'Ben Burwell',
        body_class: 'home'
    });
};

exports.resume = function (req, res) {
    res.sendfile('public/images/Ben_Burwell_Resume.pdf');
};

exports.project_index = function(req, res) {
    parseDirectory('projects', function (err, docs) {
        res.render('projects', {
            title: 'Ben Burwell‘s Projects',
            nav: true,
            current: 'projects',
            projects: docs
        });

    });
};

exports.colophon = function(req, res) {
    res.render('colophon', {
        title: 'Colophon — Ben Burwell',
        nav: true,
        current: null
    });
};

exports.writing = function(req, res) {
    parseDirectory('writing', function (err, docs) {

        res.render('writing', {
            title: 'Ben Burwell‘s Writing',
            nav: true,
            current: 'writing',
            docs: docs
        });

    });
};

exports.writing_detail = function(req, res) {

    var file = req.params.filename + '.md';
    var type = 'writing';
    parseFile(type, file, function (err, doc) {
        marked(doc.content, marked_options, function (err, content) {
            res.render('writing_detail', {
                title: doc.title,
                nav: true,
                current: 'writing',
                content: content,
                date: doc.date
            });
        });
    });
};

exports.project_detail = function(req, res) {

    var file = req.params.filename + '.md';
    var type = 'projects';
    parseFile(type, file, function (err, doc) {
        marked(doc.content, marked_options, function (err, content) {
            res.render('project_detail', {
                title: doc.title,
                nav: true,
                current: 'projects',
                content: content
            });
        });
    });
};