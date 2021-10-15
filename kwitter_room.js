const firebaseConfig = {
      apiKey: "AIzaSyDeFZV2HtjhWqNltjpt7LuF4ls8MqaT6A8",
      authDomain: "okokoko-1feef.firebaseapp.com",
      databaseURL: "https://okokoko-1feef-default-rtdb.firebaseio.com",
      projectId: "okokoko-1feef",
      storageBucket: "okokoko-1feef.appspot.com",
      messagingSenderId: "616408556276",
      appId: "1:616408556276:web:6882500a1029a5fb9434a1"
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
