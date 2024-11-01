// TypeScript code for handling the contact form

// Function to handle form submission
const handleFormSubmit = (event: Event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contact-number') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    // Basic validation (optional, since HTML5 validation is used)
    if (!name || !email || !contactNumber || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Display success message
    alert(`Form Submitted Successfully\n\nName: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nSubject: ${subject}\nMessage: ${message}`);

    // Optionally clear the form fields
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('contact-number') as HTMLInputElement).value = '';
    (document.getElementById('subject') as HTMLInputElement).value = '';
    (document.getElementById('message') as HTMLTextAreaElement).value = '';
};

// Attach event listener to the form
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}
