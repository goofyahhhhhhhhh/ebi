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
  
  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}