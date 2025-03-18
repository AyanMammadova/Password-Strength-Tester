import React from 'react'

function Header() {
    return (
        <>
            <header className='p-[10px]  '>
                <div className='flex  px-[20px] gap-[10px] justify-center border-2 border-dashed py-[10px] rounded-lg border-white '>
                    <img className='h-[60px]' src="/imgs/lock.png" alt="" />
                    <p className=' font-mono text-[3em] bg-gradient-to-r from-[#963683] to-[#FB625D] bg-clip-text text-transparent'>Unlock.</p>
                </div>
            </header>
        </>
    )
}

export default Header
