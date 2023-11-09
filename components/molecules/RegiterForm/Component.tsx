'use client'

import React, { useState } from 'react'

export default function RegisterForm (): JSX.Element {
    const [teamname, setTeamname] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [estimatedStrength, setEstimatedStrength] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = `Hierbij mijn aanmelding voor Toernooi Familia:%0ATeam Naam: ${teamname}%0ASpeler 1: ${player1}%0ASpeler 2: ${player2}%0AGeschatte Sterkte: ${estimatedStrength}%0ABedankt voor de moeite, je bent geweldig!`;
        const phoneNumber = '31615273314';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        
        window.open(whatsappLink, '_blank');
    };
    
    return (
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-10 gap-4 mt-4">
            <div className="col-span-full md:col-start-1 md:col-end-6">
                <label htmlFor="teamname" className="block text-sm font-medium text-start">
                    Team Naam
                </label>
                <input
                    type="text"
                    id="teamname"
                    className="mt-1 p-2 border rounded-md w-full hover:border-custom-blue focus-visible:outline-custom-blue focus:border-custom-blue"
                    value={teamname}
                    onChange={(e) => setTeamname(e.target.value)}
                    placeholder='Bijv: PandaKnuffelaars'
                    required
                />
                <span className='block text-start text-xs'>Verzin een orginele teamnaam samen met je partner!</span>
            </div>
            <div className="col-span-full md:col-start-6 md:col-end-12">
                <label htmlFor="estimatedStrength" className="block text-sm font-medium text-start">
                    Geschatte sterkte
                </label>
                <input
                    type="number"
                    id="estimatedStrength"
                    className="mt-1 p-2 border rounded-md w-full hover:border-custom-blue focus-visible:outline-custom-blue focus:border-custom-blue"
                    value={estimatedStrength}
                    onChange={(e) => setEstimatedStrength(e.target.value)}
                    placeholder='0-10'
                    required
                />
                <span className='block text-start text-xs'>Op schaal van 1 tot 10, waarvan <span className='underline'>1 het hoogst</span> en <span className='underline'>10 het laagst</span>.</span>
            </div>
            <div className="col-span-full md:col-start-1 md:col-end-6">
                <label htmlFor="player1" className="block text-sm font-medium text-start">
                    Speler 1
                </label>
                <input
                    type="text"
                    id="player1"
                    className="mt-1 p-2 border rounded-md w-full hover:border-custom-blue focus-visible:outline-custom-blue focus:border-custom-blue"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                    placeholder='Vul hier de naam van speler 1 in'
                    required
                />
            </div>
            <div className="col-span-full md:col-start-6 md:col-end-12">
                <label htmlFor="player2" className="block text-sm font-medium text-start">
                    Speler 2
                </label>
                <input
                    type="text"
                    id="player2"
                    className="mt-1 p-2 border rounded-md w-full hover:border-custom-blue focus-visible:outline-custom-blue focus:border-custom-blue"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                    placeholder='Vul hier de naam van speler 2 in'
                    required
                />
            </div>
            <div className='col-span-full md:col-start-1 md:col-end-12 mt-4'>
                <button
                    type="submit"
                    className="bg-custom-blue text-white p-4 px-8 font-sweetRegular text-md transition-all duration-300 border-4 border-custom-blue rounded-full hover:bg-transparent hover:text-custom-blue"
                >
                    AANMELDEN
                </button>
            </div>
        </form>
    );
};
