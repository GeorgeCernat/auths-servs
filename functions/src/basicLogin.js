let express = require("express");
let functions = require("firebase-functions");
let admin = require("firebase-admin");
let serviceAccount = require("./../../serviceAccountKey.json");
let router = express.Router();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://auths-servs.firebaseio.com"
});

try{
    router.get('/:user/:pass', function (req, res) {
    console.log("success");
    res.send(JSON.stringify("response from basicLogin"));
  })
}    
catch(err){
    console.log(err);
}
  




module.exports = router;