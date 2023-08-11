import React, { useEffect, useState } from 'react'
import SaleDetail from '../components/SaleDetail';
const ConsultSales = () => {
    
    const headerStyle = 'mx-2 py-2 px-3 text-gray-800 text-3xl border-b-2';

    return (
        <div className='p-2 pt-16 h-[calc(100vh - 64px)] flex flex-col'>
            <h1 className={headerStyle}>Consult sales</h1>
            <div className='p-2'>
                <div className='flex flex-row w-full my-2'>
                    <input type="text" className='border-b-2 border-gray-500 text-gray-500 rounded-md w-3/4 px-3 py-1' placeholder='Search customer' />
                    <select className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1 ml-1 w-1/4 bg-white' name="" id="">
                        <option value="Efectivo">Cash payment</option>
                        <option value="Efectivo">Current account</option>
                        <option value="Efectivo">Card</option>
                        <option value="Efectivo">Check</option>
                    </select>
                </div>
                <SaleDetail/>
            </div>

        </div>
    )
}

export default ConsultSales