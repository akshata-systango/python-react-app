import React from 'react';

const Input = (props) => {
    const {className, name, type, placeholder, onChange} = props
    return (
        <div>
            <input className={className} name={name} type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

export default Input;