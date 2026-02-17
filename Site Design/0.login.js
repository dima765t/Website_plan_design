document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Retrieve input values
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Check credentials and redirect accordingly
    if (userId === '1111' && password === '1111') {
        window.location.href = '2.coordinator.html';
    } else if (userId === '2222' && password === '2222') {
        window.location.href = '3.guide.html';
    } else if (userId === '3333' && password === '3333') {
        window.location.href = '4.trainee.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid ID or Password';
    }
});