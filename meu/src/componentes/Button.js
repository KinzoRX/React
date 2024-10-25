import React from 'react';
import cadastrarStyles from './Button.module.css';

const Button = ({ type = "button", onClick, children, className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${cadastrarStyles.btnCadastrar} ${className}`} 
        >
            {children}
        </button>
    );
};

export default Button;
