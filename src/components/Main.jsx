    import React, { useEffect, useState } from 'react'
    import { FaEye, FaEyeSlash } from 'react-icons/fa'
    import { IoMdKey } from 'react-icons/io'
    import { WiStars } from 'react-icons/wi'

    function Main() {
        const [password, setPassword] = useState('')
        const [open, setOpen] = useState(false)
        const [strength, setStrength] = useState(0)
        const [label, setLabel] = useState('')
        const [color, setColor] = useState('text-gray-500')

        useEffect(() => {
            if(password.length>0){
                calculateStrength(password)
            }
            else{
                setLabel('Enter Your Password')
            }
            
        }, [password])

        const calculateStrength = (password) => {
            let score = 0;
            const length = password.length;
            const uniqueChars = new Set(password).size;
            if (uniqueChars === 1) {
                setStrength(0);
                setLabel('Very Weak (Same Characters)');
                setColor('text-red-500');
                return;
            }

            const sequentialPatterns = [
                '0123456789', 'abcdefghijklmnopqrstuvwxyz', 'qwertyuiop',
                'asdfghjkl', 'zxcvbnm', '!@#$%^&*()'
            ];
            const reversedPatterns = sequentialPatterns.map(str => str.split('').reverse().join(''));
            const allPatterns = [...sequentialPatterns, ...reversedPatterns];

            for (let pattern of allPatterns) {
                if (pattern.includes(password.toLowerCase())) {
                    setStrength(0);
                    setLabel('Very Weak (Dublicate Characters)');
                    setColor('text-red-500');
                    return;
                }
            }


            if (length >= 8) score += length * 4;
            const uppercase = password.match(/[A-Z]/g)?.length || 0;
            const lowercase = password.match(/[a-z]/g)?.length || 0;
            const numbers = password.match(/[0-9]/g)?.length || 0;
            const symbols = password.match(/[^a-zA-Z0-9]/g)?.length || 0;

            if (uppercase > 0) score += (length - uppercase) * 2;
            if (lowercase > 0) score += (length - lowercase) * 2;
            if (numbers > 0) score += numbers * 4;
            if (symbols > 0) score += symbols * 6;


            const middleNumbersAndSymbols = password.slice(1, -1).match(/[0-9\W]/g)?.length || 0;
            score += middleNumbersAndSymbols * 2;

            let criteria = (length >= 8) + (uppercase > 0) + (lowercase > 0) + (numbers > 0) + (symbols > 0);
            if (criteria >= 3) score += criteria * 2;


            if (/^[a-zA-Z]+$/.test(password)) score -= length;
            if (/^\d+$/.test(password)) score -= length;

            const repeatedChars = length - uniqueChars;
            score -= repeatedChars * 2;

            score = Math.max(0, Math.min(100, score));

            setStrength(score);
            updateLabel(score);
        };

        const updateLabel = (score) => {
            if (score < 30) {
                setLabel('Weak');
                setColor('text-red-500');
            } else if (score < 60) {
                setLabel('Average');
                setColor('text-yellow-500');
            } else if (score < 80) {
                setLabel('Good');
                setColor('text-green-500');
            } else {
                setLabel('Very Strong');
                setColor('text-blue-500');
            }
        };


        return (
            <main className='text-white flex flex-col justify-between h-[50vh] text-[1.1em] font-mono p-[20px]'>
                <div>
                    <p className='flex gap-[5px] items-center mx-auto w-[90%] py-[20px]'>
                        <IoMdKey />Enter your password to check its strength
                    </p>

                    <div className='flex items-center h-[50px] p-[10px] text-black justify-between mx-auto w-[90%] bg-white rounded-lg'>
                        <input
                            className='focus:outline-none h-[100%] w-[90%] '
                            type={open ? 'text' : 'password'}
                            placeholder='Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div onClick={() => setOpen(!open)} className='text-black cursor-pointer'>
                            {open ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>


                    <p className={`text-center py-[20px] ${color}`}>{label} ({strength}%)</p>
                </div>

                <p className='pt-[20px] text-blue-200 text-center items-center justify-center flex flex-col'>
                    BTW, This checker runs entirely in your browser. <br /> Your data never leaves your device.
                    <span className='flex'>
                        <WiStars className='text-[2em]' />
                        <WiStars className='text-[2em]' />
                        <WiStars className='text-[2em]' />
                    </span>
                </p>
            </main>
        )
    }

    export default Main;
