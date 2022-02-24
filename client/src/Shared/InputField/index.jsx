import React from 'react';

const Input = (props) => {
    const {className, name, type, placeholder} = props
    return (
        <div>
            <input className={className} name={name} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;