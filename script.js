// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a simple alert for demonstration
    alert('Thank you for your message!');

    // Reset the form fields
    this.reset();
});
