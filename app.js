const firebaseConfig = {
  apiKey: "AIzaSyC16izOc-SFwMdw-kBtloSbeYj_qFU09qM",
  authDomain: "backyard-d9e83.firebaseapp.com",
  databaseURL: "https://backyard-d9e83-default-rtdb.firebaseio.com",
  projectId: "backyard-d9e83",
  storageBucket: "backyard-d9e83.appspot.com",
  messagingSenderId: "816339018282",
  appId: "1:816339018282:web:e02e1b54ddf4c857e49953",
  measurementId: "G-RMZLCBJ9X2"
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('messages');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

let user = snap.val();

let $li = document.createElement("li");
$li.innerHTML = user.name;

$li.setAttribute("child-key", snap.key);
$li.addEventListener("click", userClicked)
userListUI.append($li);
});

function userClicked(e) {

var userID = e.target.getAttribute("child-key");

const userRef = dbRef.child('messages/' + userID);
const userDetailUI = document.getElementById("userDetail");

userDetailUI.innerHTML = ""

userRef.on("child_added", snap => {
 

var $p = document.createElement("p");

$p.innerHTML = snap.key + " - " + snap.val()
userDetailUI.append($p);

});

}

