let taskArray = [];

const addTask = () => {
    const task = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    
    if (task && date) {
        taskArray.unshift({ task, date });
        printData();
        document.getElementById('title').value = '';
        document.getElementById('date').value = ''; 
    } else {
        alert('Por favor, ingrese tanto la tarea como la fecha.');
    }
}

const printData = () => {
    const container = document.querySelector("main"); 
    
    container.innerHTML = ""; 
    
    taskArray.forEach((taskItem, index) => {
        container.innerHTML += `
            <article class="cardWrapper">
                <button class="deleteButton" onClick={deleteTask(${index})}>-</button>
                <h2>Tarea: ${taskItem.task}</h2>
                <h2>Fecha: ${taskItem.date}</>
            </article>`;
    });
}
const deleteTask = (index) => {
    const confirmation = confirm("¿Está seguro de que desea eliminar esta tarea?");
    if (confirmation) {
        taskArray.splice(index, 1); 
        printData();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    printData();
  });