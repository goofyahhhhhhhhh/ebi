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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
     
   //Start code
   console.log("firebase message id: : " + firebase_message_id);
   console.log(message_data);
   name = message_data['name'];
   message = message_data['message'];
   like = message_data['like'];
   
   name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
   message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
   like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   row = name_with_tag + message_with_tag + like_button + span_with_tag + ";";
   document.getElementById("output").innerHTMl +=row;
   //End code
  } });  }); }
  getData();

  function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function updateLike(message_id){
  console.log("clicked on like button" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log("Updated Likes : " + updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });
  }