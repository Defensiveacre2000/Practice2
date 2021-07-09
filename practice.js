// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDw_cadBfgKi7RLK2zfXd2R3h0Fdf4y-0s",
authDomain: "chitter-32db5.firebaseapp.com",
databaseURL: "https://chitter-32db5-default-rtdb.firebaseio.com",
projectId: "chitter-32db5",
storageBucket: "chitter-32db5.appspot.com",
messagingSenderId: "133133713770",
appId: "1:133133713770:web:87ec9a00f73c202ddf6513"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}