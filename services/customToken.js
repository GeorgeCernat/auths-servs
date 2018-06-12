var admin = require("firebase-admin")
var serviceAccount = require("./../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://auths-servs.firebaseio.com"
});

const uid = "some-uid";

admin.auth().createCustomToken(uid)
.then((customToken) => {
    console.log("token: ",customToken);
})
.catch((error) => {
    console.log("error creating custom token:", error);
});