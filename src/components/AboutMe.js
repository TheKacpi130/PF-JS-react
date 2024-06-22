import React from 'react';
import "../style/AboutMe.scss";
import CV from '../documents/CV.pdf';

const AboutMe = () => {
    return (
        <div id="aboutMe" className="aboutMe-container">
            <div data-aos="fade-right" className="aboutMe">
                <h1 className="aboutMe__title">O mnie</h1>
                <p className="aboutMe__description">Cześć jestem Kacper i już od Technikum wiedziałem że chce zostać informatykiem z początku była to wyłącznie miłość do hardware'u lecz z czasem strasznie polubiłem pisanie stron WWW ale nie zamykając się tylko na HTML czy CSS. Każdego dnia staram uczyć się czegoś nowego i powiększać swoją wiedzę w zakresie IT i nowych technologii</p>
            </div>
            <div data-aos="fade-up" className="cv">
                <a href={CV} target="_blank" rel="noopener noreferrer"><button className="button button--cv">Moje CV</button></a>
            </div>
        </div>
    );
}

export default AboutMe;