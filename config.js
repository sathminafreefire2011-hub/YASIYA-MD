const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~pFpxhawA#nal3iO9qw0cgzeQoCIRQaBHx6vMB3axCZlELsE9-Las'
};
