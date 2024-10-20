import React, { useState } from 'react';
import Button from './componentes/Button';
import styles from './componentes/Button.modules.css';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
        };

        try {
            const response = await fetch('https://sua-api.com/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
                setName('');
                setEmail('');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div className={styles.form}>
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
        </div>
    );
}

export default Form;
