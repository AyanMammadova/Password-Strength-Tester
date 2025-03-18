import React from 'react'

function Footer() {
    const thisDate = new Date().getFullYear()

    return (
        <>
            <p className=' font-mono text-center py-[10px] bg-gradient-to-r from-[#963683] to-[#FB625D] bg-clip-text text-transparent'>
                © Copyright {thisDate} All rights reserved by Ayan Mammadova
            </p>
        </>
    )
}

export default Footer
