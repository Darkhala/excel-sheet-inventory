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

// Reference to the PM comments container
const pmCommentsContainer = document.getElementById("pmCommentsContainer");

// Retrieve and display PM comments
database.ref("pmComments").on("value", (snapshot) => {
    pmCommentsContainer.innerHTML = ""; // Clear previous content

    const pmComments = snapshot.val();
    if (pmComments) {
        Object.values(pmComments).forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("pm-comment");
            commentElement.innerHTML = `
                <h3>${comment.pmName}</h3>
                <p>Client Name: ${comment.clientName}</p>
                <p>Comment: ${comment.comment}</p>
            `;
            pmCommentsContainer.appendChild(commentElement);
        });
    }
});

// View Report function
function viewReport() {
    window.location.href = "report.html";
}

// Logout function
function logout() {
    window.location.href = "homepage.html";
}