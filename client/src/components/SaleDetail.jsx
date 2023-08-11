import React, { useState } from 'react'
import Table from './Table'

const SaleDetail = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const products = [
        {
            id: 1,
            description: 'Producto 1',
            brand: 'Marca 1',
            price: '$ 100',
            cost: '$ 70',
        },
        {
            id: 2,
            description: 'Producto 2',
            brand: 'Marca 2',
            price: '$ 150',
            cost: '$ 110',
        },
        {
            id: 3,
            description: 'Producto 3',
            brand: 'Marca 3',
            price: '$ 200',
            cost: '$ 160',
        },
        {
            id: 4,
            description: 'Producto 4',
            brand: 'Marca 4',
            price: '$ 250',
            cost: '$ 180',
        },
    ]

    return (
        <>
            <div className='bg-neutral-100 rounded-3xl transition-all duration-300'>
                <button onClick={handleShow} className='grid grid-cols-12 mb-2 w-full justify-between py-2 px-5 items-center'>
                    <span className='col-span-2 flex'>00001</span>
                    <div className='flex flex-col col-span-8 text-left'>
                        <span className='w-full'>Tobias Ceballos</span>
                        <span className='text-red-600'>Current account</span>
                    </div>
                    <div className='flex flex-col col-span-2 text-right'>
                        <span className='w-full'>24/07/2023</span>
                        <span className='text-slate-600'>02:14:55</span>
                    </div>
                </button>
                {show &&
                    <div className='p-1'>
                        <div className='overflow-y-scroll my-2 scroll rounded-md border h-[30vh]'>
                            <Table data={products} />
                        </div>
                        <div className='w-full grid grid-cols-4 text-xl font-light gap-1'>
                            <span className='col-span-2 border p-2 border-amber-500 rounded-md'>Net: $ 700,00</span>
                            <span className='col-span-2 border p-2 border-amber-500 rounded-md'>Discount: 10%</span>
                            <span className='col-span-2 border p-2 border-amber-500 rounded-md'>Deposit: $ 10</span>
                            <span className='col-span-2 border p-2 bg-white border-amber-500 rounded-md'>Total: $ 620,00</span>
                            <button className='col-span-4 py-2 bg-slate-800 text-amber-400 font-semibold rounded-full border-4 border-amber-400 my-2 mx-1'>To settle</button>
                        </div>
                    </div>

                }
            </div>
        </>

    )
}

export default SaleDetail