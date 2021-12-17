import React from 'react'
import { useRef, setState } from 'react'

TODO: //Find a way to let app.js access the taskList list and return the items as cards

const taskList = []

function TaskModal(props) {
    //ref allows you access to DOM elements, ref is a object
    const taskInputRef = useRef();

    function submitHandler(event){
        //prevents page from constantly loading
        event.preventDefault();
        
        const enteredTask = taskInputRef.current.value;
        
        //console.log(enteredTask)
        //will also add the task to the task list as final function step
        taskList.push(enteredTask)
        console.log(taskList)
        return taskList
        
    }


    return (
        <div className='modal'>
            <h1>New Task</h1>
            <form onSubmit={submitHandler}>
                <input className='input' name='Test' ref={taskInputRef}/>
                <button>Create</button>
            </form>
            <button onClick={props.onClick}>close</button>
        </div>
    )
}

export default TaskModal