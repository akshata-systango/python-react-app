import React from 'react';

const Input = (props) => {
    const {className, name, type, placeholder, onclick} = props
    return (
        <div>
            <input className={className} name={name} type={type} placeholder={placeholder} onChange={onclick}/>
        </div>
    );
};

export default Input;