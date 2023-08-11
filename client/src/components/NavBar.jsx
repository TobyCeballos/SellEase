import React, { useState } from 'react'

import { BsChevronCompactDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const navButtonStyles = 'text-xl p-2 hover:bg-slate-500 border-b border-gray-600 hover: ease-in-out duration-300 tracking-tight hover:tracking-'

    return (
        <div className={`${show && "backdrop-blur-sm h-screen"} fixed w-full text-2xl z-50`}>
            <button onClick={handleShow} className='bg-gray-800  p-4 w-full text-slate-100'>
                <h1>Sell<span className='text-amber-400'>Ease</span></h1>
            </button>
            <BsChevronCompactDown className={`${show && 'rotate-180'} absolute top-12 bg-slate-800 rounded-full p-1 text-slate-100 ease-in-out duration-300 left-1`} />
            {show &&
                <div className=' w-full text-slate-50 bg-gray-700 ease-in-out duration-300 text-center flex flex-col'>
                    <Link to={'/'} onClick={handleShow} className={navButtonStyles}>Home</Link>
                    <Link to={'/articles'} onClick={handleShow} className={navButtonStyles}>Articles</Link>
                    <Link to={'/sales'} onClick={handleShow} className={navButtonStyles}>Sales</Link>
                    <Link to={'/consultsales'} onClick={handleShow} className={navButtonStyles}>Consult sales</Link>
                    <Link to={'/quotation'} onClick={handleShow} className={navButtonStyles}>Quotation</Link>
                    <Link to={'/consultquotation'} onClick={handleShow} className={navButtonStyles}>Consult quotation</Link>
                </div>
            }

        </div>
    )
}

export default NavBar