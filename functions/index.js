const functions = require('firebase-functions');

const expressRoutes = require('./routes/index');

exports.app = functions.https.onRequest(expressRoutes);
