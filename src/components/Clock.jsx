import React from 'react';

const Clock = ({locale}) => {
    return (
        <div>
           <h1 className=''>
            <span className='text'>{new Date().toLocaleTimeString(locale)}</span>
            </h1> 
        </div>
    );
};

export default Clock;