'use client'

import Tag from '@/components/atoms/Tag/Component'
import React, { useState } from 'react'
import players from '../../../data/players.json'

export interface Player {
    name: string
    matchAmountPreference: string | number
}

export interface Players {
    players: Player[]
}


export default function TournamentBracket (): JSX.Element {

    //Matches tracker
    const [roundOneCourtOne, setRoundOneCourtOne] = useState<string | number>('')
    const [roundOneCourtTwo, setRoundOneCourtTwo] = useState<string | number>('')

    const [roundTwoCourtOne, setRoundTwoCourtOne] = useState<string | number>('')
    const [roundTwoCourtTwo, setRoundTwoCourtTwo] = useState<string | number>('')

    const [roundThreeCourtOne, setRoundThreeCourtOne] = useState<string | number>('')
    const [roundThreeCourtTwo, setRoundThreeCourtTwo] = useState<string | number>('')

    const [roundFourCourtOne, setRoundFourCourtOne] = useState<string | number>('')
    const [roundFourCourtTwo, setRoundFourCourtTwo] = useState<string | number>('')

    const [roundFiveCourtOne, setRoundFiveCourtOne] = useState<string | number>('')
    const [roundFiveCourtTwo, setRoundFiveCourtTwo] = useState<string | number>('')

    const [roundSixCourtOne, setRoundSixCourtOne] = useState<string | number>('')
    const [roundSixCourtTwo, setRoundSixCourtTwo] = useState<string | number>('')

    const [roundSevenCourtOne, setRoundSevenCourtOne] = useState<string | number>('')
    const [roundSevenCourtTwo, setRoundSevenCourtTwo] = useState<string | number>('')
    
    return (
        <div className='mt-6 md:mt-12 w-full md:max-w-6xl text-custom-blue'>
            <div className='flex justify-between'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 1</h2>
                <h3>3.00PM tot 3.20PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundOneCourtOne(1) }}>Melchior & Bodine</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundOneCourtOne(0) }}>Stef & Brigit</button>
                            </p>
                        </div>
                        <div className={`flex ${roundOneCourtOne === 1 ? 'items-start': roundOneCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundOneCourtTwo(1) }}>Ernst & Karin</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundOneCourtTwo(0) }}>Victoria & Peter</button>
                            </p>
                        </div>
                        <div className={`flex ${roundOneCourtTwo === 1 ? 'items-start': roundOneCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 2</h2>
                <h3>3.20PM tot 3.40PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundTwoCourtOne(1) }}>Olga & Melchior</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundTwoCourtOne(0) }}>Bodine & Ernst</button>
                            </p>
                        </div>
                        <div className={`flex ${roundTwoCourtOne === 1 ? 'items-start': roundTwoCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundTwoCourtTwo(1) }}>Yorick & Brigit</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundTwoCourtTwo(0) }}>Stef & Gleb</button>
                            </p>
                        </div>
                        <div className={`flex ${roundTwoCourtTwo === 1 ? 'items-start': roundTwoCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 3</h2>
                <h3>3.40PM tot 4.00PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundThreeCourtOne(1) }}>Yorick & Olga</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundThreeCourtOne(0) }}>Gleb & Karin</button>
                            </p>
                        </div>
                        <div className={`flex ${roundThreeCourtOne === 1 ? 'items-start': roundThreeCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundThreeCourtTwo(1) }}>Victoria & Brigit</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundThreeCourtTwo(0) }}>Stef & Peter</button>
                            </p>
                        </div>
                        <div className={`flex ${roundThreeCourtTwo === 1 ? 'items-start': roundThreeCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 4</h2>
                <h3>4.00PM tot 4.20PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFourCourtOne(1) }}>Bodine & Melchior</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFourCourtOne(0) }}>Ernst & Karin</button>
                            </p>
                        </div>
                        <div className={`flex ${roundFourCourtOne === 1 ? 'items-start': roundFourCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFourCourtTwo(1) }}>Peter & Victoria</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFourCourtTwo(0) }}>Olga & Gleb</button>
                            </p>
                        </div>
                        <div className={`flex ${roundFourCourtTwo === 1 ? 'items-start': roundFourCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 5</h2>
                <h3>4.20PM tot 4.40PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFiveCourtOne(1) }}>Melchior & Ernst</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFiveCourtOne(0) }}>Yorick & Gleb</button>
                            </p>
                        </div>
                        <div className={`flex ${roundFiveCourtOne === 1 ? 'items-start': roundFiveCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFiveCourtTwo(1) }}>Bodine & Brigit</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundFiveCourtTwo(0) }}>Stef & Victoria</button>
                            </p>
                        </div>
                        <div className={`flex ${roundFiveCourtTwo === 1 ? 'items-start': roundFiveCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 6</h2>
                <h3>4.40PM tot 5.00PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSixCourtOne(1) }}>Melchior & Bodine</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSixCourtOne(0) }}>Peter & Olga</button>
                            </p>
                        </div>
                        <div className={`flex ${roundSixCourtOne === 1 ? 'items-start': roundSixCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSixCourtTwo(1) }}>Brigit & Stef</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSixCourtTwo(0) }}>Yorick & Karin</button>
                            </p>
                        </div>
                        <div className={`flex ${roundSixCourtTwo === 1 ? 'items-start': roundSixCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-6'>
                <h2 className='text-custom-orange font-sweetBold text-xl'>Ronde 7</h2>
                <h3>5.00PM tot 5.20PM</h3>
            </div>
            <div className='border-2 border-custom-blue p-3 rounded-md flex flex-col gap-4'>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 1</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSevenCourtOne(1) }}>Ernst & Yorick</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSevenCourtOne(0) }}>Peter & Melchior</button>
                            </p>
                        </div>
                        <div className={`flex ${roundSevenCourtOne === 1 ? 'items-start': roundSevenCourtOne === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
                <div className='border-2 border-custom-blue border-dashed p-2 flex justify-between'>
                    <p className='flex items-center'>Baan 2</p>
                    <div className='flex gap-2'>
                        <div>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSevenCourtTwo(1) }}>Victoria & Gleb</button>
                            </p>
                            <hr className='h-0.5 bg-custom-blue my-1'/>
                            <p className='text-center'>
                                <button className='hover:text-custom-orange transition-colors' onClick={() => { setRoundSevenCourtTwo(0) }}>Olga & Karin</button>
                            </p>
                        </div>
                        <div className={`flex ${roundSevenCourtTwo === 1 ? 'items-start': roundSevenCourtTwo === 0 ? 'items-end' : 'hidden'}`}>
                            <Tag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
