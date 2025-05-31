import React from "react";
import './About.css';

import Imga from "../../assets/Imagensota.png";
import PrettyBoy from "../../assets/pretty boy.jpg"; 

export const About = () => {
    const teamMembers = [
        {
            name: "Nicolas Rojas Cabal",
            role: "Ingeniero Informático 6to semestre",
            description: "en mi prime dormía más de 3 horas",
            image: PrettyBoy
        },
        {
            name: "Santiago Gomez Molano",
            role: "Ingeniero Informático 6to semestre",
            description: "Santiago > Messi (prime)",
            image: Imga
        },
    ];

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div 
                        className="team-member" 
                        key={index} 
                        style={{ backgroundColor: index % 2 === 0 ? '#86c5a8' : '#7ed957' }}
                    >
                        <img 
                            src={member.image} 
                            alt={`Foto de ${member.name}`} 
                            className="team-member-image" 
                        />
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
