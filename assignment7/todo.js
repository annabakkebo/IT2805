
var tasks = [];

function addTask() {
    var li = document.createElement('li');
    var input = document.getElementById('inputText');
    var checkbox = document.createElement('input');
    checkbox.type='checkbox';
    li.appendChild(checkbox);
    var label = document.createElement('label');
    label.innerHTML= input.value;
    li.appendChild(label);
    var list = document.getElementById('todoList');
    list.insertBefore(li,list.childNodes[0]);
    tasks.push({text:input.value, date: Date()});
    /*console.log(tasks);*/
    return false;
}


