import React from 'react'


export default function TournamentBracket (): JSX.Element {
    
    return (
        <div className='mt-6 md:mt-12 w-full md:max-w-4xl text-custom-blue'>
            <h2 className='font-sweetBold text-2xl text-center text-custom-orange'>Wat nu?</h2>
            <p className='pt-2'>Nog even geduld, wanneer er genoeg aanmeldingen binnen zijn zal Yorick een toernooi schema opstellen waarin je precies kan zien wanneer, met wie en voor hoelang je mag spelen. Dus ga vooral snel je maatje berichten om een team te vormen, nogmaals max 2 teams per persoon (dus je mag je twee keer aanmelden).</p>
            <p className='pt-2'>In de tussentijd kun je alvast de <a className='underline hover:text-custom-orange transition-colors duration-300' target='_blank' href='https://www.nlpadel.nl/alles-over-padel/ontdek-padel/wat-is-padel/spelregels/'>regels</a> van padel doornemen en <a className='underline hover:text-custom-orange transition-colors duration-300' href='https://www.youtube.com/results?search_query=padel' target='_blank'>inspiratie videos</a> van de pros bekijken op Youtube.</p>
        </div>
    );
};
