import React from 'react'
import { useRef } from 'react'


function TaskModal(props) {
    //ref allows you access to DOM elements, ref is a object
    const taskInputRef = useRef();

    function submitHandler(event){
        //prevents page from constantly loading
        event.preventDefault();
        
        const enteredTask = taskInputRef.current.value;
        
        console.log(enteredTask)
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