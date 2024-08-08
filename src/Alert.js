import React from 'react';

// Function to cleate an alert with a button
function Alert({ message, onClose }) {
    return (
        <div id="alert">
            <p>{message}</p>
            <button id="alert-button" onClick={onClose}>Close</button>
        </div>
    );
}

export default Alert;