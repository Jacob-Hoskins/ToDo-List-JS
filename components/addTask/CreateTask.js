import React, { useState } from 'react'
import TaskModal from './TaskModal';
import Backdrop from '../Backdrop.js'


function CreateTask() {
    const [taskModalOpen, setTaskModalOpen] = useState(false);

    function createHandler(){
        setTaskModalOpen(true);
    };

    function closeModalHandler(){
        setTaskModalOpen(false);
    };

    return (
        <div>
            <button onClick={createHandler}>Create Task</button>
            {taskModalOpen && <TaskModal onClick={closeModalHandler} />}
            {taskModalOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    )
}

export default CreateTask
