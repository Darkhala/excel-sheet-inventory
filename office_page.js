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

// Function to submit the form
function submitForm() {
    const form = document.getElementById("officeForm");
    const formData = {
        name: form.querySelector("#name").value,
        location: form.querySelector("#location").value,
        organization: form.querySelector("#organization").value,
        department: form.querySelector("#department").value,
        computer: {
            computerName: form.querySelector("#computerName").value,
            serialNumber: form.querySelector("#serialNumber").value,
            model: form.querySelector("#model").value,
            computerType: form.querySelector("#computerType").value,
        },
        serviceDone: form.querySelector("#serviceDone").value
    };

    console.log("Form Data:", formData);

    // Push form data to Firebase
    database.ref("officeData").push(formData)
        .then(() => {
            alert("Form submitted successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error("Error saving form data to Firebase:", error);
        });
}