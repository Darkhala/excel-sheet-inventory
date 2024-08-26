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

// Reference to the PM comment form
const pmCommentForm = document.getElementById("pmCommentForm");

// Function to submit PM comment
function submitPMComment() {
    const pmName = document.getElementById("pmName").value;
    const clientName = document.getElementById("clientName").value;
    const comment = document.getElementById("comment").value;

    const pmComment = {
        pmName,
        clientName,
        comment,
    };

    // Push PM comment data to Firebase
    database.ref("pmComments").push(pmComment)
        .then(() => {
            alert("PM Comment submitted successfully!");
            clearPMCommentForm();
            window.location.href = "comment_page.html"; // Redirect to comment_page.html
        })
        .catch((error) => {
            console.error("Error saving PM comment to Firebase:", error);
        });
}

// Function to clear PM comment form after submission
function clearPMCommentForm() {
    pmCommentForm.reset();
}

// Reference to the summary container
const summaryContainer = document.getElementById("individualData");

// Retrieve and display office data summary
database.ref("officeData").on("value", (snapshot) => {
    summaryContainer.innerHTML = ""; // Clear previous content

    const officeData = snapshot.val();
    if (officeData) {
        Object.values(officeData).forEach((data) => {
            const dataElement = document.createElement("div");
            dataElement.classList.add("data-summary");
            dataElement.innerHTML = `
                <h3>${data.name}</h3>
                <p>Location: ${data.location}</p>
                <p>Organization: ${data.organization}</p>
                <p>Department: ${data.department}</p>
                <p>Computer Name: ${data.computer.computerName}</p>
                <p>Serial Number: ${data.computer.serialNumber}</p>
                <p>Model: ${data.computer.model}</p>
                <p>Computer Type: ${data.computer.computerType}</p>
                <p>Service Done: ${data.serviceDone}</p>
            `;
            summaryContainer.appendChild(dataElement);
        });
    }
});