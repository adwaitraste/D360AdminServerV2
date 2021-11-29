const File = require('../models/files');
const fs = require('fs');

var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else { 
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

let upload = function (file, path, res) {
    deleteFolderRecursive(path);
    fs.mkdirSync(path);

    file.mv(path + file.name, function (err) {
        if (err)
            return res.status(500).send(err);
    });

    File.findOne({
        where: {
            path
        }
    })
        .then(f => {
            if (f) {
                f.update({
                    name: file.name,
                })
                    .then(() => res.status(201).send("File Updated"))
            }
            else {
                File.create(
                    {
                        name: file.name,
                        path,
                    }
                )
                    .then(() => res.status(201).send("File Created"))

            }
        })
        .catch(err => console.log(err))
}

module.exports = upload;