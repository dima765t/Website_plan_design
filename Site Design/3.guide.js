// Handle presence form submission
document.getElementById('presence-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const presenceMessage = document.getElementById('presence-message');

    // Simulate presence update logic
    presenceMessage.style.display = 'block';
    presenceMessage.style.color = '#4caf50'; // Green color for success message
    presenceMessage.textContent = 'נוכחות עודכנה בהצלחה!';
});

// Handle event logging form submission
document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const eventDescription = document.getElementById('event-description').value;
    const trainee = document.getElementById('trainee').value;
    const eventMessage = document.getElementById('event-message');

    if (trainee) {
        // Simulate event logging logic
        eventMessage.style.display = 'block';
        eventMessage.style.color = '#4caf50'; // Green color for success message
        eventMessage.textContent = `האירוע נרשם בהצלחה עבור ${trainee}!`;
    } else {
        eventMessage.style.display = 'block';
        eventMessage.style.color = '#ff4d4d'; // Red color for error message
        eventMessage.textContent = 'אנא בחר תלמיד לתיעוד האירוע.';
    }
});

// Toggle the trainee selection based on task type
document.getElementById('task-type').addEventListener('change', function() {
    const traineeSection = document.getElementById('individual-trainee');
    if (this.value === 'individual') {
        traineeSection.style.display = 'block';
    } else {
        traineeSection.style.display = 'none';
    }
});

// Handle task assignment form submission
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const taskDescription = document.getElementById('task-description').value;
    const taskType = document.getElementById('task-type').value;
    const traineeTask = document.getElementById('trainee-task').value;
    const deadline = document.getElementById('deadline').value;
    const taskFile = document.getElementById('task-file').files[0]; // Get the uploaded file
    const taskMessage = document.getElementById('task-message');

    if (taskType === 'group' || (taskType === 'individual' && traineeTask)) {
        if (taskFile) {
            // Simulate task assignment logic with file upload
            taskMessage.style.display = 'block';
            taskMessage.style.color = '#4caf50'; // Green color for success message
            taskMessage.textContent = 'המשימה הועלתה בהצלחה!';
        } else {
            taskMessage.style.display = 'block';
            taskMessage.style.color = '#ff4d4d'; // Red color for error message
            taskMessage.textContent = 'אנא העלה קובץ משימה.';
        }
    } else {
        taskMessage.style.display = 'block';
        taskMessage.style.color = '#ff4d4d'; // Red color for error message
        taskMessage.textContent = 'אנא בחר תלמיד ספציפי למשימה זו.';
    }
});

// Function to display random problematic trainees
function displayProblematicTrainees() {
    const trainees = [
        { name: 'תלמיד א׳', issues: ['לא העלה מטלות בזמן', 'חסר 4 שיעורים'] },
        { name: 'תלמיד ב׳', issues: ['חסר 3 שיעורים'] },
        { name: 'תלמיד ג׳', issues: ['לא העלה מטלות בזמן'] },
        { name: 'תלמיד ד׳', issues: ['חסר 5 שיעורים'] },
        { name: 'תלמיד ה׳', issues: ['לא העלה מטלות בזמן', 'חסר 3 שיעורים'] },
    ];

    // Randomly select trainees to display
    const selectedTrainees = trainees.filter(() => Math.random() > 0.5);

    const problematicList = document.getElementById('problematic-list');
    problematicList.innerHTML = ''; // Clear the list

    selectedTrainees.forEach(trainee => {
        const li = document.createElement('li');
        li.textContent = `${trainee.name}: ${trainee.issues.join(', ')}`;
        problematicList.appendChild(li);
    });
}

// Call the function to display problematic trainees on page load
displayProblematicTrainees();