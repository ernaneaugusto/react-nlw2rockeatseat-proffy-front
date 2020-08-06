import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from "./../../assets/images/logo.svg";
import landingImg from "./../../assets/images/landing.svg";
import studyIcon from "./../../assets/images/icons/study.svg";
import giveClassesIcon from "./../../assets/images/icons/give-classes.svg";
import purpleHearthIcon from "./../../assets/images/icons/purple-heart.svg";

function Landing() {
    return (
        <main id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" title="Proffy" />
                    <h2 className="title">Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" title="Plataforma de estudos" />

                <div className="buttons-container">
                    <Link to="/study" className="button study">
                        <img src={studyIcon} alt="Estudar" title="Estudar" /> Estudar
                    </Link>
                    <Link to="/give-classes" className="button give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" title="Dar aulas" /> Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 150 conexões já realizadas <img src={purpleHearthIcon} alt="Coração roxo" title="Coração roxo" />
                </span>
            </div>
        </main>
    )
}

export default Landing;