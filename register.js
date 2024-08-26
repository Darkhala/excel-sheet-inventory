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

// Reference to the registration form
const registrationForm = document.getElementById("registration-form");

// Handle form submission
registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const location = document.getElementById("location").value;
    const organization = document.getElementById("organization").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    if (password !== repeatPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save user data to Firebase
    const userData = {
        name,
        department,
        location,
        organization,
        password,
    };

    // Push user data to Firebase
    const userRef = database.ref("users");

    userRef.push(userData)
    .then(() => {
        alert("Registration successful!");
        redirectToLogin();
    })
    .catch((error) => {
        console.error("Error saving data to Firebase:", error);
    });

    // Clear the form
    registrationForm.reset();
});

function redirectToLogin() {
    window.location.href = "login.html"; 
}