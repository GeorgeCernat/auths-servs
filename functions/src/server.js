let express = require('express');
let cors = require('cors');
let functions = require("firebase-functions");
let admin = require("firebase-admin");

let app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
// app.get('/:id', (req, res) => res.send("get id"));
// app.get('/', (req, res) => res.send("get /"));
// app.get('/:id1/:id2', (req, res) => res.send(JSON.stringify("get id1 id2")));

let basicLogin = require("./basicLogin");
app.use("/basicLogin", basicLogin);

exports.app = functions.https.onRequest(app);

// exports.testCORS = functions.https.onRequest((request, response) => {
//     cors(request, response, () => {
//         response.status(200).send("CORS worked");
//     })
// });

