import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from "./Link.module.css"; 
import Input from './Input'; 
import Button from './Button'; 
import cadastrarStyles from './Button.module.css';
import './imageCard.css'

Modal.setAppElement('#root');

function PropertyCard({ property }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState(''); 

    const handleInfoClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setName(''); 
        setEmail(''); 
        setPhone('');
    };

    const cadastrarUsuario = (e) => {
        e.preventDefault();
        
        console.log("Cadastro realizado:", { name, email, phone });
        closeModal(); 
    };

    return (    
        <div className="imageCard">
            <img src={property.image} alt={property.title} className="image"/>
            <div className='propertyInfo'>
            <h3>{property.title}</h3>
            <p><strong>Preço:</strong> {property.price}</p>
            <p>{property.description}</p>
            <button onClick={handleInfoClick} className={styles.btn}>WhatsApp</button>
</div>
            <Modal isOpen={isOpen} onRequestClose={closeModal}
                style={{
                    content: {
                        width:'400px',
                        height: '400px',
                        margin: 'auto',
                        borderRadius: '10px',
                    },
                }}
            >
                <div>
                    <h1>Insira suas informações</h1>
                    <form onSubmit={cadastrarUsuario} className="space-y-4">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <Input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefone:</label>
                            <Input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="Digite seu telefone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Button type="submit" className={cadastrarStyles.btnCadastrar}>Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );    
}

export default PropertyCard;
