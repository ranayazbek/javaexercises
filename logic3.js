// Select the necessary elements
const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

// Function to add a new task
function addTask() {
  const taskValue = taskInput.value.trim(); // Get the input value and trim whitespace

  if (taskValue) { // Check if the input is not empty
    const li = document.createElement('li'); // Create a new <li> element
    li.textContent = taskValue; // Set the text content to the input value

    // Add an event listener to delete the task when clicked
    li.addEventListener('click', function() {
      taskList.removeChild(li); // Remove the <li> from the task list
    });

    taskList.appendChild(li); // Append the new <li> to the task list
    taskInput.value = ''; // Clear the input field
  }
}

// Add event listener to the button
addButton.addEventListener('click', addTask);


// Add event listener to the input field for Enter key press
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { // Check if the pressed key is Enter
    addTask(); // Call the addTask function
  }
});