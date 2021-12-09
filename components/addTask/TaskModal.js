import React from 'react'

function TaskModal(props) {
    return (
        <div className='modal'>
            <h1>New Task</h1>
            <input className='input'/>
            <button>Create</button>
            <button onClick={props.onClick}>close</button>
        </div>
    )
}

export default TaskModal
