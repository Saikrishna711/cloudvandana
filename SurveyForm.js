<script>
        const form = document.getElementById("surveyForm");
        const submitBtn = document.getElementById("submitBtn");
        const resetBtn = document.getElementById("resetBtn");
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popupContent");
        const closePopup = document.getElementById("closePopup");
        submitBtn.addEventListener("click", function () {
            if (form.checkValidity()) {
                const firstName = document.getElementById("firstName").value;
                const lastName = document.getElementById("lastName").value;
                const dob = document.getElementById("dob").value;
                const country = document.getElementById("country").value;
                const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked'))
                    .map(checkbox => checkbox.value).join(", ");
                const profession = document.getElementById("profession").value;
                const email = document.getElementById("email").value;
                const mobile = document.getElementById("mobile").value;
                const popupText = `
                    First Name: ${firstName}
                    Last Name: ${lastName}
                    Date of Birth: ${dob}
                    Country: ${country}
                    Gender: ${gender}
                    Profession: ${profession}
                    Email: ${email}
                    Mobile Number: ${mobile}
                `;
                popupContent.textContent = popupText;
                popup.style.display = "block";
                form.reset();
            } else {
                alert("Please fill out all the required fields.");
            }
        });
        resetBtn.addEventListener("click", function () {
            form.reset();
        });
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    </script>
