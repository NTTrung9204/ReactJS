import './InputTask.js';
import InputTask from './InputTask.js';
import { useState } from 'react';
import ListTask from './ListTask.js';
import Footer from './Footer.js';

function TodoApp() {
    const [isFill, SetIsFill] = useState(true);
    const [taskList, SetTaskList] = useState([
            "Complete online JavaScript course",
            "Jog around the park 3x",
            "10 minutes meditation",
            "Read book for 1 hour",
        ]);
    
    const [count, SetCount] = useState(taskList.length);
    
    function updateCount(status){
        status ? SetCount(count + 1) : SetCount(count - 1);
    }

    function onChange(event){
        event.target.value ? SetIsFill(false) : SetIsFill(true);
    }

    function removeTask(event){
        const index = event.target.getAttribute('data-id');
        const newTaskList = taskList.filter((_, i) => i != index);
        SetTaskList(newTaskList);
        updateCount(false);
    }

    function addListTask(){
        const task = document.querySelector('.InputForm').value;
        if(task) {
            SetTaskList([task, ...taskList]);
            updateCount(true);
            onChange({target: {value: false}});
            document.querySelector('.InputForm').value = '';
        }
    }

    function clearAll(){
        if(count > 0){
            SetTaskList([]);
            SetCount(0);
        }
    }

    return (
        <div className="todoApp">
            <h1 className="headerTodo">Todo App</h1>
            <InputTask onChange={onChange} onClick={addListTask} status={isFill} />
            <ListTask count={count} taskList={taskList} onClick={removeTask} />
            <Footer count={count} onClick={clearAll} />
        </div>
    )
}

export default TodoApp;