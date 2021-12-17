import { useState } from 'react';


function Modal(props) {

    return(
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn' onClick={props.onClick}>Confirm</button>
            <button className='btn btn--alt' onClick={props.onClick}>Cancel</button>
        </div>
    );
}



export default Modal;