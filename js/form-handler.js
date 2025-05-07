// Initialize EmailJS
(function() {
    // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
    emailjs.init("QRMZp4Zq_LCCUcn4t");
    
    // Add form submission event handler
    document.getElementById('joinForm').addEventListener('submit', handleSubmit);
})();

/**
 * Handles the form submission
 * @param {Event} event - The form submission event
 */
function handleSubmit(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Show loading state
    const submitButton = document.getElementById('submit-button');
    const formStatus = document.getElementById('form-status');
    
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    formStatus.textContent = "";
    
    // Collect form data
    const params = {
        gamertag: document.getElementById('gamertag').value,
        real_name: document.getElementById('realName').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        platform: document.getElementById('platform').value,
        location: document.getElementById('location').value,
        kd_ratio: document.getElementById('kd').value,
        hours_available: document.getElementById('hours').value,
        experience: document.getElementById('experience').value,
        why_join: document.getElementById('why').value,
        commitment: document.getElementById('commitment').checked ? 'Yes' : 'No',
        requirements: document.getElementById('requirements').checked ? 'Yes' : 'No',
        subject: '[SANDF] New Clan Application'
    };
    
    // Send email using EmailJS
   emailjs.send('service_cmpibbi','template_glshxor', params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Redirect to thank you page
            window.location.href = "thank-you.html";
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            formStatus.textContent = 'Failed to send form. Please try again later.';
            submitButton.textContent = "Submit Application";
            submitButton.disabled = false;
        });
}