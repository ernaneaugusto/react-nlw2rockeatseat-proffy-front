import React from 'react';
import whatsappIcon from "./../../assets/images/icons/whatsapp.svg";
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header className='header'>
                <img src="https://avatars3.githubusercontent.com/u/24357684?s=460&u=f359584835d6d8a9a4d2277808a8f3e511ab01db&v=4" alt="Ernane Toledo" title="Ernane Toledo" />
                <div className='infos'>
                    <strong>Ernane Toledo</strong>
                    <span>HTML/CSS</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto veritatis velit officia accusantium ullam tempore soluta ipsa.</p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Ícone Whatsapp" title="Entrar em contato" /> Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;