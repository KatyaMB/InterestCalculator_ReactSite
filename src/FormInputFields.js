import React from 'react';

// Separate component to create a field with props
function FormInputFields({ text, placeholder, value, onChange, readOnly = false }) {
    return (
        <div>
            <span>{text}</span>
            <input 
                type="number" 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
        </div>
    );
}

export default FormInputFields;