import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from '../components/Chart'

const Home = () => {
    const [totalProfit, setTotalProfit] = useState(22102.10)
    const [dollarData, setDollarData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://api.bluelytics.com.ar/v2/latest")
            .then(res => setDollarData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    // Estilos en variables
    const headerStyle = 'mx-2 py-2 px-3 text-gray-800 text-3xl border-b-2';
    const loadingStyle = 'bg-slate-700 text-slate-100 font-bold p-2 col-span-4 border border-gray-400';
    const labelStyle = 'bg-slate-200 font-bold p-2 col-span-2 border border-gray-400';
    const valueStyle = 'bg-slate-50 p-2 col-span-2 border border-gray-400';
    const gananciasUltimos7Dias = [10000, 15000, 20000, 18000, 22000, 25000, 22000];

    return (
        <div className='p-2 pt-16 h-[calc(100vh - 64px)] flex flex-col'>
            <h1 className={headerStyle}>Home</h1>
            <div className='text-center mt-3 grid grid-cols-4 border-b-2'>
                {loading ? <span className={loadingStyle}>Cargando...</span> : (
                    <>
                        <span className={loadingStyle}>Dollar value</span>
                        <span className={labelStyle}>Official</span>
                        <span className={labelStyle}>Blue</span>
                        <span className={valueStyle}>Sell: ${parseFloat(dollarData.oficial?.value_sell).toFixed(2)}</span>
                        <span className={valueStyle}>Sell: ${parseFloat(dollarData.blue?.value_sell).toFixed(2)}</span>
                        <span className={valueStyle}>Buy: ${parseFloat(dollarData.oficial?.value_buy).toFixed(2)}</span>
                        <span className={valueStyle}>Buy: ${parseFloat(dollarData.blue?.value_buy).toFixed(2)}</span>
                    </>
                )}
            </div>
            <Chart gananciasUltimos7Dias={gananciasUltimos7Dias} />
            <div className='flex justify-between text-slate-700 border-t-2 border-b-2 mt-3 p-3 text-xl mx-2'>
                <span className='underline font-semibold'>Total profit: </span><span className='font-semibold'>$ {totalProfit.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className='flex justify-between text-slate-700 border-t-2 border-b-2 mt-3 p-3 text-xl mx-2'>
                <span className='underline font-semibold'>Dollar equivalent:</span><span className='font-semibold'>U$D {parseFloat(totalProfit / dollarData.blue?.value_sell).toFixed(2)}</span>
            </div>
            <footer className='absolute left-0 p-5 bg-slate-100 border-t-2 text-center bottom-0 w-full'>
                Created by <a className='text-sky-700 underline underline-offset-2' href="https://www.instagram.com/toby_ceballos/">Tobias Ceballos</a>.
            </footer>
        </div>
    )
}

export default Home