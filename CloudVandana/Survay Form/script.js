document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupData = document.getElementById("popup-data");

    submitButton.addEventListener("click", function () {
        // Validate required fields
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelectorAll('input[name="gender"]:checked').length > 0;
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
            alert("All fields are required!");
            return;
        }

        // Prepare data for popup
        const formData = {
            "First Name": firstName,
            "Last Name": lastName,
            "Date of Birth": dob,
            "Country": country,
            "Gender": Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value).join(", "),
            "Profession": profession,
            "Email": email,
            "Mobile Number": mobile,
        };

        // Display data in popup
        let popupContent = "";
        for (const key in formData) {
            popupContent += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
        }
        popupData.innerHTML = popupContent;

        // Show the popup
        popup.style.display = "block";
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });
});
