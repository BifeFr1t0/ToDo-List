const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const finished = document.querySelector('.finished');
const input = document.querySelector('input');

function toDoTask() {
    const texto = document.querySelector('#texto').value;

    if (texto === '') {
        input.setAttribute('placeholder', 'A tarefa foi nula');
        return;
    }

    input.setAttribute('placeholder', 'Digite uma tarefa');

    const task = document.createElement('div');
    task.classList.add('task', 'col-10', 'text-center', 'offset-1', 'mt-2', 'mb-1', 'p-2');
    task.innerHTML = texto;
    const move = document.createElement('button');
    move.classList.add('btn', 'btn-sm', 'btn-secondary', 'ms-2');
    move.innerText = '>';
    


    
    move.addEventListener('click', () => {
        doingTask(task, move)}
    );

    //  Estilizacao e mostrar botão de mover
    task.addEventListener('mouseover', () =>{
        task.appendChild(move);
        task.classList.add('bg-light');
    });


    task.addEventListener('mouseleave', () =>{
        task.removeChild(move);
        task.classList.remove('bg-light');
    });

    toDo.appendChild(task);
    document.querySelector('#texto').value = '';
}
    //  até aqui!

    // Mover tarefa 
function doingTask(task, button) {

    button.removeEventListener('click', () =>{
        doingTask(task, button)
    });

    button.addEventListener('click', () =>{
        finishedTask(task, button)
    } );

    doing.appendChild(task);
}

function finishedTask(task,button) {
    button.remove();

    button.removeEventListener('click', () =>{
        finishedTask(task,button)
    });

    button.addEventListener('click', () =>{
        removeTask(task)
    } );

    finished.appendChild(task);
}

function removeTask(task) {
    
    finished.removeChild(task);
}