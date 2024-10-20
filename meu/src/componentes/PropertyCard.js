import React, { useState } from 'react';
import Modal from 'react-modal';


function PropertyCard({ property }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleInfoClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="property-card">
            <h3>{property.title}</h3>
            <p><strong>Preço:</strong>{property.price}</p>
            <p>{property.description}</p>
            <button onClick={handleInfoClick}>WhatsApp</button>
            
            <Modal isOpen={isOpen} onRequestClose={closeModal}> 
            <h1>(55)1234-5678</h1>
            <button onClick={closeModal}>Fechar</button>
            </Modal>
            
      </div>
    );
}

export default PropertyCard