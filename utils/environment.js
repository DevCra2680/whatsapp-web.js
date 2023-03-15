const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
/* eslint no-process-env:0 */
module.exports.default = {
    URL_POWERAUTOMATE: process.env.URL_PATH,
    URL_VEHICULOS_LIVIANOS: process.env.URL_VEHICULOS_LIVIANOS,

    // Grab everything in you .env file here
};