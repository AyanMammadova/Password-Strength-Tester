import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoMdKey } from 'react-icons/io'
import { WiStars } from 'react-icons/wi'

function Main() {
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false)
    return (
        <>
            <main className='text-white text-[1.1em] font-mono p-[20px]'>
                <div>
                    <p className='flex gap-[5px] items-center mx-auto w-[90%]'><IoMdKey />Enter your password to check its strength</p>

                    <div className='flex items-center h-[50px] p-[10px] text-black justify-between mx-auto w-[90%] bg-white rounded-lg'>
                        <input
                            className='focus:outline-none h-[100%] w-[90%] '
                            type={open ? 'text' : 'password'}
                            placeholder='Your Password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <div onClick={()=>setOpen(!open) } className='text-black cursor-pointer'>
                            {
                                open
                                    ? <FaEye />
                                    : <FaEyeSlash />
                            }
                        </div>

                    </div>
                </div>
                <p className=' pt-[20px] text-blue-200 text-center items-center justify-center flex flex-col'>
                    BTW,This checker runs entirely in your browser. <br /> Your data never leaves your device.
                    <span className='flex'>
                        <WiStars className='text-[2em]' />
                        <WiStars className='text-[2em]' />
                        <WiStars className='text-[2em]' />
                    </span>
                </p>
            </main>
        </>
    )
}

export default Main
