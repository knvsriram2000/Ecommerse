/* eslint-disable indent */
const fs = require('fs');

const errorLogger = (err, req, res, next) => {
    if (err) {
        fs.appendFile('ErrorLogger.log', `${new Date()} : ${err.message} - ${req.url}\n`, (error) => {
            if (error) {
                console.log('logging error failed');
            }
        });
        if (err.status) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({ message: err.message });
    }
    next();
};
module.exports = errorLogger;
