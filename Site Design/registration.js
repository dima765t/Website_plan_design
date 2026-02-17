document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const group = document.getElementById('group').value;
    const formMessage = document.getElementById('form-message');

    // Example group availability check
    const groupCapacity = {
        A: 10, // Max capacity for group A
        B: 15, // Max capacity for group B
        C: 20  // Max capacity for group C
    };

    // Example current enrollment (would be dynamically fetched in a real application)
    const currentEnrollment = {
        A: 9,  // Current enrollment for group A
        B: 15, // Current enrollment for group B
        C: 18  // Current enrollment for group C
    };

    // Validate group availability
    if (currentEnrollment[group] < groupCapacity[group]) {
        formMessage.style.display = 'block';
        formMessage.style.color = '#4caf50'; // Green color for success
        formMessage.textContent = `הרישום לקבוצה ${group} הושלם בהצלחה!`;

        // Simulate adding the user to the group
        currentEnrollment[group]++;
    } else {
        formMessage.style.display = 'block';
        formMessage.style.color = '#ff4d4d'; // Red color for error
        formMessage.textContent = `הקבוצה ${group} מלאה. אנא בחר קבוצה אחרת.`;
    }
});