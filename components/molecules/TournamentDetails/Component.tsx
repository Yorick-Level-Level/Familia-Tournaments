import React from 'react'
import RegisterForm from '../RegiterForm/Component';

export default function TournamentDetails (): JSX.Element {
    
    return (
        <div className='mt-6 md:mt-12 mb-6 md:mb-12 text-custom-blue text-center md:max-w-4xl'>
            <p className='text-2xl font-sweetRegular'>Zaterdag 2 December</p>
            <p className='text-xl font-sweetRegular mt-1'><span className='p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2'>14.45PM</span><span className=''> tot </span><span className='p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2'>17.30PM</span></p>
            <p className='mt-4 font-sweetBold tracking-widest'>Jagtlustkade 12B, 2171 AG Sassenheim</p>
            <div className='mt-4 text-left'>
                <p>
                    Om het familia toernooi zo soepel mogelijk te laten verlopen, worden er van te voren teams gemaakt die zullen strijden voor de eerste plek. Ben je je dubbelpartner zat?! Geen probleem: Je mag je met twee mensen inschrijven (dus twee teams vormen). Dit zorgt voor meer diversiteit en lol! haal je met beide teams de finale; dan moet je een vervanger regelen.
                </p>
                <p className='mt-2'>
                    Ik hoor je al denken: <span className='italic'>&quot;Maar als ik de eerste ronde verlies, ben ik dan al uitgespeeld?&quot;</span>. Nee zeker niet! In dit toernooi doen wij aan een verliezers ronde zodat iedereen aan de beurt komt. De partijen zullen op basis van de hoeveelheid aanmeldingen een bepaalde tijdsduur hebben, waarin het team dat voorstaat na afloop de winnaar is. 
                </p>
                <p className='mt-2'>
                    <span className='italic'>&quot;Hoe kan ik mij aanmelden voor dit fantastische event?&quot;</span>. Heel simpel, stuur Yorick een bericht met de volgende informatie:
                </p>
            </div>
            <RegisterForm />
        </div>
    );
};
