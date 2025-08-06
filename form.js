document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formStatus = document.getElementById("form-status");
    formStatus.textContent = "Sending...";
    formStatus.style.color = "blue";

    // FormSubmit.co endpoint (replace with your email)
    fetch("https://formsubmit.co/ajax/your-email@gmail.com", {
        method: "POST",
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "green";
            this.reset();
        } else {
            throw new Error("Failed to send");
        }
    })
    .catch(error => {
        formStatus.textContent = "Error: Please try again later";
        formStatus.style.color = "red";
    });
});
