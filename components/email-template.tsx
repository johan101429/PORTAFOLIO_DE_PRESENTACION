import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message: string;
    email: string;


}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = 
({ firstName, message, email }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
            <h1 style={{ color: '#333' }}>Nuevo mensaje de contacto</h1>
            <p>Has recibido un nuevo mensaje de contacto desde tu portafolio.</p>
            <p><strong>Nombre:</strong> {firstName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>{message}</p>
        </div>
    );
} 