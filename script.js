document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contact-number').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Fetch POST request to MockAPI
    fetch('https://67137f0c6c5f5ced66269c89.mockapi.io/api/v1/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)  // Send the form data
    })
    .then(response => {
        if (response.ok) {
            // Show success message and pop-up alert
            alert('Form Submitted Successfully');  // Show a pop-up box
            
            // Clear the form fields only after showing the success message
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(error => {
        // Show error message
        alert('Submission Failed: ' + error.message);  // Show a pop-up box for error
    });
});
