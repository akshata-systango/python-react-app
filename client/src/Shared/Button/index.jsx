import React from 'react';

const Button = (props) => {
    const {className, children, type} = props
    return (
        <div>
            <button className={className} type={type}>{children}</button>
        </div>
    );
};

export default Button;