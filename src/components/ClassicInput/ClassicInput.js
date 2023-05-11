import React from 'react';

const ClassicInput = ({}) => {
    return (
        <div className='input_wrapper'>
            <input type='text' id='email' className='input input_error'/>
            <label htmlFor='email' className='label label_error'>email</label>
        </div>
    )
}

export default  ClassicInput;