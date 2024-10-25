import React from "react";
import styles from './styles.module.css';
import PropertyCard from './PropertyCard';

import './imageCard.css'




const properties = [
    {
        id: 1,
        title: 'Apartamento em São Paulo',
        price: 'R$ 750.000',
        description: 'Apartamento de 2 quartos, 1 banheiro e 1 suite',
        image: 'https://www.hausbau.com.br/wp-content/uploads/2022/05/decoracao-minimalista-apartamento-1024x682.jpg'
    },

    {
        id: 2,
        title: 'Casa de campo',
        price: 'R$ 500.000',
        description: 'Casa Ampla com 4 quartos e Jardim',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlVDUEyChqGUuvZXvQJG4rjPkoY0gSNwgog&s"


    },
    
    {
        id: 3,
        title: 'Kitnet',
        price: 'R$ 125.000',
        description: 'Kitnet com sala e cozinha conjugado 1 quarto e banheiro',
        image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/179212283.jpg?k=199752605553bea35a76f4ce4268469dfcb5eba9035452cd6ef671ebbbb07223&o=&hp=1'

    },
];
const PropertyList = () => {
    return (
        <section id="properties">
            <h2>Imoveis disponiveis</h2>
            <div className ={styles.propertyList}>
                {properties.map(property =>(
                    <PropertyCard key={property.id} property={property}/>
                ))}
            </div>
            
        </section>
    );
};

export default PropertyList ;