const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lZ5y0CqT#ui1q3JNy6Kc7e_gofcTMcVj3i_OkVTUiTL7tM9ujjDw'
};
