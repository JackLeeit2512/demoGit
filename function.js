const firebaseConfig = {
  apiKey: "AIzaSyD0gIJsnEqsUYST535xV_47MerhdFp3cJQ",
  authDomain: "node-red-8bac3.firebaseapp.com",
  databaseURL: "https://node-red-8bac3-default-rtdb.firebaseio.com",
  projectId: "node-red-8bac3",
  storageBucket: "node-red-8bac3.appspot.com",
  messagingSenderId: "145490641575",
  appId: "1:145490641575:web:5ae322bfd8349644ab9182",
  measurementId: "G-VBDRQ7KQT0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Open/Close a Door
var doorRef = firebase.database().ref().child('Door/');

doorRef.on(
"value",
function (snapshot) {
    var status = snapshot.val();
    if (status === 1) {
      document.getElementById('doorStatus').innerHTML = "On";
    } else {
      document.getElementById('doorStatus').innerHTML = "Off";
    }
},
function (error) {
    console.error(error);
}
);

function doorOpen() {
  firebase.database().ref().update({
    "/Door": 1
  });
}
function doorClose() {
  firebase.database().ref().update({
    "/Door": 0
  });
}

// On/Off a Light Switch
var lightRef = firebase.database().ref().child('Light/');

lightRef.on(
"value",
function (snapshot) {
    var status = snapshot.val();
    if (status === 1) {
      document.getElementById('lightStatus').innerHTML = "On";
    } else {
      document.getElementById('lightStatus').innerHTML = "Off";
    }
},
function (error) {
    console.error(error);
}
);

function Bright() {
  firebase.database().ref().update({
    "/Light": 1
  });
}
function Dark() {
  firebase.database().ref().update({
    "/Light": 0
  });
}

// Open/Close a window
var windowRef = firebase.database().ref().child('Window/');

windowRef.on(
"value",
function (snapshot) {
    var status = snapshot.val();
    if (status === 1) {
      document.getElementById('windowStatus').innerHTML = "On";
    } else {
      document.getElementById('windowStatus').innerHTML = "Off";
    }
},
function (error) {
    console.error(error);
}
);

function windowOpen() {
  firebase.database().ref().update({
    "/Window": 1
  });
}
function windowClose() {
  firebase.database().ref().update({
    "/Window": 0
  });
}

// On/Off a Fan Switch
var fanRef = firebase.database().ref().child('Fan/');

fanRef.on(
"value",
function (snapshot) {
    var status = snapshot.val();
    if (status === 1) {
      document.getElementById('fanStatus').innerHTML = "On";
    } else {
      document.getElementById('fanStatus').innerHTML = "Off";
    }
},
function (error) {
    console.error(error);
}
);

function fanOn() {
  firebase.database().ref().update({
    "/Fan": 1
  });
}
function fanOff() {
  firebase.database().ref().update({
    "/Fan": 0
  });
}

// Sensor Data
var temperature = firebase.database().ref("Sensor/").child("Temperature/");
var humidity = firebase.database().ref("Sensor/").child("Humidity/");

temperature.on(
"value",
  function (snapshot) {
      var val = snapshot.val();
      document.getElementById('tem').innerHTML = val;
  },
);
humidity.on(
  "value",
    function (snapshot) {
        var val = snapshot.val();
        document.getElementById('hum').innerHTML = val;
    },
  );