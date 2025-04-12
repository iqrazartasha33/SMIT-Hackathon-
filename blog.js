document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = document.getElementById('taskDescription');
    const taskText = taskInput.value.trim();
    const descriptionText = taskDescription.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const category = document.getElementById('category').value;
    const taskList = document.getElementById(`${category}-list`);

    const listItem = document.createElement('li');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-title');
    taskContent.textContent = taskText;

    const taskDesc = document.createElement('div');
    taskDesc.textContent = descriptionText ? `Description: ${descriptionText}` : 'No description provided';

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.addEventListener('click', function () {
        taskInput.value = taskText;
        taskDescription.value = descriptionText;
        taskList.removeChild(listItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskContent);
    listItem.appendChild(taskDesc);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
    taskDescription.value = '';
});

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.category-cards .card');

    allCards.forEach(card => {
        const heading = card.querySelector('h3').textContent.toLowerCase();
        if (heading.includes(searchValue) || searchValue === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
