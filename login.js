const firebaseConfig = {
    apiKey: "AIzaSyBeL5czmOspM1DJ4w_CuFrDuyoPSNw-5WE",
    authDomain: "user-info-form-ae5c5.firebaseapp.com",
    databaseURL: "https://user-info-form-ae5c5-default-rtdb.firebaseio.com",
    projectId: "user-info-form-ae5c5",
    storageBucket: "user-info-form-ae5c5.appspot.com",
    messagingSenderId: "697145841898",
    appId: "1:697145841898:web:d637661fdcfd3d63405f93"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

// Reference to the login form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Debugging: Log input values
    console.log("Name:", name);
    console.log("Password:", password);

    // Check if user credentials exist in Firebase
    const userRef = database.ref("users");

    userRef.once("value", (snapshot) => {
        const users = snapshot.val();

        // Debugging: Log the retrieved users object
        console.log("Users:", users);

        // Check if the user exists and password is correct
        if (users) {
            const user = Object.values(users).find(u => u.name === name && u.password === password);

            if (user) {
                // Redirect to the dashboard (customize the dashboard URL)
                window.location.href = "dashboard.html"; // Create this page
            } else {
                // Display an error message for invalid credentials
                alert("Invalid username or password!!!");
            }
        } else {
            // Display an error message for invalid credentials
            alert("Invalid username or password!!!");
        }
    });
});