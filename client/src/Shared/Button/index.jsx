import React from 'react';

const Button = (props) => {
    const {className, children, type, onclick} = props
    return (
        <div>
            <button className={className} type={type} onClick={onclick}>{children}</button>
        </div>
    );
};

export default Button;