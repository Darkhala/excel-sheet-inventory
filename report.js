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

// Reference to the report container
const reportContainer = document.getElementById("reportContainer");

// Retrieve and display PM comments as a report
database.ref("pmComments").on("value", (snapshot) => {
    reportContainer.innerHTML = ""; // Clear previous content

    const pmComments = snapshot.val();
    if (pmComments) {
        Object.values(pmComments).forEach((comment) => {
            const reportElement = document.createElement("div");
            reportElement.classList.add("report-item");
            reportElement.innerHTML = `
                <h3>${comment.pmName}</h3>
                <p>Client Name: ${comment.clientName}</p>
                <p>Comment: ${comment.comment}</p>
            `;
            reportContainer.appendChild(reportElement);
        });
    }
});

// Back to Comment Page function
function goToCommentPage() {
    window.location.href = "comment_page.html";
}