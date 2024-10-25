import React from 'react';

const Input = ({ type = "text", id, name, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border rounded p-2 w-full" 
        />
    );
};

export default Input;
