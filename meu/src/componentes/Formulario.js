import React, { useState } from 'react';
import Button from './componentes/Button';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        const data = { name, email };

        try {
            const response = await fetch('https://sua-api.com/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setMessage('Dados enviados com sucesso!');
                setName('');
                setEmail('');
            } else {
                setMessage('Erro ao enviar os dados.');
            }
        } catch (error) {
            setMessage('Erro ao enviar os dados.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <Button type="submit">Enviar</Button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Form;
