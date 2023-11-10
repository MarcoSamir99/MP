const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


exports.userCreated = functions.auth.user().onCreate((user) => {
  return admin.firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const newUser = doc.data();
        console.log(newUser);
      });
});
