document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        today: document.getElementById('todaySection'),
        tomorrow: document.getElementById('tomorrowSection'),
        'this-week': document.getElementById('thisWeekSection')
    };

    function showSection(section, bgClass) {
        for (let key in sections) {
            sections[key].style.display = 'none';
        }
        const mainContent = document.getElementById('mainContent');
        mainContent.classList.remove('bg-today', 'bg-tomorrow', 'bg-this-week');

        sections[section].style.display = 'block';
        mainContent.classList.add(bgClass); 
    }
    

    document.getElementById('today').addEventListener('click', () => showSection('today','bg-today'));
    document.getElementById('tomorrow').addEventListener('click', () => showSection('tomorrow','bg-tomorrow'));
    document.getElementById('this-week').addEventListener('click', () => showSection('this-week','bg-this-week'));

    // Set default section
    showSection('today','bg-today');

    window.addTask = function(inputID, containerID, completedID){
        const inputBox = document.getElementById(inputID);
        const taskContainer = document.getElementById(containerID);
        const completedContainer = document.getElementById(completedID);
        const taskText = inputBox.value;
        if(taskText === ''){
            alert("Please add some task!");
        }
        else{
            let listItem = document.createElement("li");

            let taskWrapper = document.createElement("div");
            taskWrapper.className = 'task-wrapper';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className= 'check';

            let taskSpan = document.createElement("span");
            taskSpan.className = 'task-text';
            taskSpan.textContent = taskText;

            let deleteSpan = document.createElement("span");
            deleteSpan.innerHTML="\u00d7";
            deleteSpan.className='delete';

            let addedTime = document.createElement("div");
            addedTime.className = 'time';
            addedTime.innerHTML = ` (Added: ${new Date().toLocaleString()})`;

            let completedTime = document.createElement("span");
            completedTime.className = 'time';
            completedTime.style.display = 'none';

            listItem.appendChild(taskWrapper);
            taskWrapper.appendChild(checkbox);
            taskWrapper.appendChild(taskSpan);
            listItem.appendChild(addedTime);
            listItem.appendChild(completedTime);
            taskWrapper.appendChild(deleteSpan);
            taskContainer.appendChild(listItem);
            inputBox.value = '';

            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    taskSpan.classList.add('done');
                    completedTime.innerHTML = ` (Completed: ${new Date().toLocaleString()})`;
                    completedTime.style.display = 'inline'; 
                    taskContainer.removeChild(listItem);
                    completedContainer.appendChild(listItem);
                } 
                else {
                    taskSpan.classList.remove('done');
                    completedTime.style.display = 'none';
                    addedTime.innerHTML = ` (Added: ${new Date().toLocaleString()})`;
                    completedContainer.removeChild(listItem); 
                    taskContainer.appendChild(listItem);
                }
            });

            deleteSpan.addEventListener("click", function() {
                listItem.remove();
            });
        }
    };
});

// createList().function name(params) {
    
// }

// function saveData(){
//     localStorage.setItem("data", listItem.innerHTML);
// } 
// function showTask(){
//     listItem.innerHTML = localStorage.getItem("data");
// }
// showTask();  
// }

