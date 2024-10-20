import React from "react";
import PropertyCard from './PropertyCard';

const properties = [
    {
        id: 1,
        title: 'Apartamento em São Paulo',
        price: 'R$ 750.000',
        description: 'Apartamento de 2 quartos, 1 banheiro e 1 suite',

    },

    {
        id: 2,
        title: 'Casa de campo',
        price: 'R$ 500.000',
        description: 'Casa Ampla com 4 quartos e Jardim',

    },
];

const PropertyList = () => {
    return (
        <section id="properties">
            <h2>Imoveis disponiveis</h2>
            <div className = "property-list">
                {properties.map(property =>(
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
            
        </section>
    );
};

export default PropertyList ;