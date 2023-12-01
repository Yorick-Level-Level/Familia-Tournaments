import React from 'react'
import RegisterForm from '../RegiterForm/Component';

export default function TournamentDetails (): JSX.Element {
    
    return (
        <div className='mt-6 md:mt-12 mb-6 md:mb-12 text-custom-blue text-center md:max-w-4xl'>
            <p className='text-2xl font-sweetRegular'>Zaterdag 2 December</p>
            <p className='text-xl font-sweetRegular mt-1'><span className='p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2'>14.45PM</span><span className=''> tot </span><span className='p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2'>17.30PM</span></p>
            <p className='mt-4 font-sweetBold tracking-widest'>Jagtlustkade 12B, 2171 AG Sassenheim</p>
        </div>
    );
};
