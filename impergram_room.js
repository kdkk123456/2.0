// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC9-6yQ3_6OuUliIMKNXHrtR-_78kdhXUs",
      authDomain: "scuffed-online-snapchat.firebaseapp.com",
      databaseURL: "https://scuffed-online-snapchat.firebaseio.com",
      projectId: "scuffed-online-snapchat",
      storageBucket: "scuffed-online-snapchat.appspot.com",
      messagingSenderId: "211199176385",
      appId: "1:211199176385:web:4de820dba20db80032ae40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
