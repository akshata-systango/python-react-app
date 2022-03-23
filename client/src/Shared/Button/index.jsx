import React from 'react';

const Button = (props) => {
    const {className, children, type, onclick, disabled} = props
    return (
        <div>
            <button className={className} type={type} onClick={onclick} diabled={disabled}>{children}</button>
        </div>
    );
};

export default Button;