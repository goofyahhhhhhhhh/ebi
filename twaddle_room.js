const firebaseConfig = {
      apiKey: "AIzaSyC_duSI6Q-uxHizKObym4okb3mRku7riq0",
      authDomain: "twaddleitisallowing.firebaseapp.com",
      databaseURL: "https://twaddleitisallowing-default-rtdb.firebaseio.com",
      projectId: "twaddleitisallowing",
      storageBucket: "twaddleitisallowing.firebasestorage.app",
      messagingSenderId: "873167696749",
      appId: "1:873167696749:web:5cd82134d8581441516064"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        });
        localStorage.setItem("room_name", room_name);
        
        window.location = "twaddle_page_html";
}



function addUser(){
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
      console.log("room_name : " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTMl +=row;
      //End code
      });});}
getData();

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location("twaddle_page.html");
}

function send(){
      msg = document.getElementById("msg").value();
}