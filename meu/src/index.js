import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ImoveisComponent from './componentes/Imoveis'; 
import Contato from './componentes/Contato';
import Modal from 'react-modal';


function App() {
    return (
         
        <div>
            <ImoveisComponent />    
            {<Contato />}
            
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

Modal.setAppElement('#root');


