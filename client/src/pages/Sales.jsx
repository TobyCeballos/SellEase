import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '../components/Table';
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Sales = () => {
  const [payCond, setPayCond] = useState("")
  const [net, setNet] = useState(2000)
  const [deposit, setDeposit] = useState(100)
  const [discount, setDiscount] = useState(10)


  const productsData = [
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
    {
      id: 5,
      description: 'Producto 5',
      brand: 'Marca 5',
      price: '$ 300',
      cost: '$ 220',
    },
    {
      id: 6,
      description: 'Producto 6',
      brand: 'Marca 6',
      price: '$ 350',
      cost: '$ 250',
    },
    {
      id: 7,
      description: 'Producto 7',
      brand: 'Marca 7',
      price: '$ 400',
      cost: '$ 280',
    },
    {
      id: 8,
      description: 'Producto 8',
      brand: 'Marca 8',
      price: '$ 450',
      cost: '$ 300',
    },
    {
      id: 9,
      description: 'Producto 9',
      brand: 'Marca 9',
      price: '$ 500',
      cost: '$ 320',
    },
    {
      id: 10,
      description: 'Producto 10',
      brand: 'Marca 10',
      price: '$ 550',
      cost: '$ 340',
    },
    {
      id: 11,
      description: 'Producto 11',
      brand: 'Marca 11',
      price: '$ 600',
      cost: '$ 360',
    },
    {
      id: 12,
      description: 'Producto 12',
      brand: 'Marca 12',
      price: '$ 650',
      cost: '$ 380',
    },
    {
      id: 13,
      description: 'Producto 13',
      brand: 'Marca 13',
      price: '$ 700',
      cost: '$ 400',
    },
    {
      id: 14,
      description: 'Producto 14',
      brand: 'Marca 14',
      price: '$ 750',
      cost: '$ 420',
    },
    {
      id: 15,
      description: 'Producto 15',
      brand: 'Marca 15',
      price: '$ 800',
      cost: '$ 440',
    },
    {
      id: 16,
      description: 'Producto 16',
      brand: 'Marca 16',
      price: '$ 850',
      cost: '$ 460',
    },
    {
      id: 17,
      description: 'Producto 17',
      brand: 'Marca 17',
      price: '$ 900',
      cost: '$ 480',
    },
    {
      id: 18,
      description: 'Producto 18',
      brand: 'Marca 18',
      price: '$ 950',
      cost: '$ 500',
    },
    {
      id: 19,
      description: 'Producto 19',
      brand: 'Marca 19',
      price: '$ 1000',
      cost: '$ 520',
    },
    {
      id: 20,
      description: 'Producto 20',
      brand: 'Marca 20',
      price: '$ 1050',
      cost: '$ 540',
    },
    {
      id: 21,
      description: 'Producto 21',
      brand: 'Marca 21',
      price: '$ 1100',
      cost: '$ 560',
    },
    {
      id: 22,
      description: 'Producto 22',
      brand: 'Marca 22',
      price: '$ 1150',
      cost: '$ 580',
    },
    {
      id: 23,
      description: 'Producto 23',
      brand: 'Marca 23',
      price: '$ 1200',
      cost: '$ 600',
    },
    {
      id: 24,
      description: 'Producto 24',
      brand: 'Marca 24',
      price: '$ 1250',
      cost: '$ 620',
    },
    {
      id: 25,
      description: 'Producto 25',
      brand: 'Marca 25',
      price: '$ 1300',
      cost: '$ 640',
    },
    {
      id: 26,
      description: 'Producto 26',
      brand: 'Marca 26',
      price: '$ 1350',
      cost: '$ 660',
    },
    {
      id: 27,
      description: 'Producto 27',
      brand: 'Marca 27',
      price: '$ 1400',
      cost: '$ 680',
    },
    {
      id: 28,
      description: 'Producto 28',
      brand: 'Marca 28',
      price: '$ 1450',
      cost: '$ 700',
    },
    {
      id: 29,
      description: 'Producto 29',
      brand: 'Marca 29',
      price: '$ 1500',
      cost: '$ 720',
    },
    {
      id: 30,
      description: 'Producto 30',
      brand: 'Marca 30',
      price: '$ 1550',
      cost: '$ 740',
    },
  ];
  const headerStyle = 'mx-2 py-2 px-3 text-gray-800 text-3xl border-b-2';

  return (
    <form className='p-2 pt-16 h-[calc(100vh - 64px)] flex flex-col'>
      <h1 className={headerStyle}>Sales</h1>
      <div className='p-2 m-2 border rounded-md'>
        <div className='flex'>
          <div className='flex flex-col w-1/6'>
            <span className='ml-2'>Num.</span>
            <input type="number" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' value={1} readOnly />
          </div>
          <div className='flex flex-col w-5/6 '>
            <span className='ml-2'>Customer</span>
            <input type="text" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1 ml-2' placeholder='Customer' />
          </div>
        </div>
        <div className='flex flex-col w-full mt-2'>
          <span className='ml-2'>Observations</span>
          <input type="text" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' placeholder='Observations' />
        </div>
        <div className='flex'>
          <div className='flex flex-col w-3/6 mt-2 mr-1'>
            <span className='ml-2'>Payment cond.</span>
            <select onChange={(e) => {
              console.log(e.target.value)
              setPayCond(e.target.value)
            }} className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1 bg-white' name="" id="">
              <option value="CashPayment">Cash payment</option>
              <option value="CurrentAccount">Current account</option>
              <option value="Card">Card</option>
              <option value="Check">Check</option>
            </select>
          </div>
          <div className='flex flex-col w-3/6 mt-2 ml-1'>
            <span className='ml-2'>VAT cond.</span>
            <select className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1 bg-white' name="" id="">
              <option value="Efectivo">Consumidor final</option>
              <option value="Efectivo">Exento</option>
              <option value="Efectivo">Monotributista</option>
              <option value="Efectivo">No categorizado</option>
              <option value="Efectivo">No responsable</option>
              <option value="Efectivo">Resp. inscripto</option>
              <option value="Efectivo">Resp. no inscripto</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col w-full mt-2'>
          <span className='ml-2'>Search</span>
          <input type="text" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' placeholder='Search' />
        </div>
        <div className='overflow-y-scroll my-2 scroll rounded-md border h-[30vh]'>
          <Table data={productsData} />
        </div>
        <div className='grid grid-cols-6 gap-4'>
          <div className={payCond === "CurrentAccount" ? "col-span-2" : "col-span-3"}>
            <div className='flex flex-col'>
              <span className='ml-2'>Net</span>
              <input type="number" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' value={net}/>
            </div>
          </div>
          {payCond === "CurrentAccount" && (
            <div className="col-span-2">
              <div className={"flex flex-col"}>
                <span className='ml-2'>Deposit</span>
                <input type="number" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1 mx-1' value={deposit}/>
              </div>
            </div>
          )}
          <div className={payCond === "CurrentAccount" ? "col-span-2" : "col-span-3"}>
            <div className='flex flex-col'>
              <span className='ml-2'>Discount</span>
              <input type="number" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' value={discount}/>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='flex flex-col'>
              <span className='ml-2'>Total</span>
              <input type="number" className='border-b-2 border-gray-500 text-gray-500 rounded-md px-3 py-1' value={parseFloat((net - deposit)-(net))}/>
            </div>
          </div>
        </div>

        <div className='mt-2 flex w-full'>
          <button className='p-3 bg-slate-800 rounded-full border-4 border-amber-300'><AiOutlineShoppingCart className='h-6 w-6 text-amber-300' /></button>
          <button className='p-3 mx-1 bg-slate-800 rounded-full border-4 border-amber-300 text-amber-300 font-semibold w-full'>Sell</button>
        </div>
      </div>
    </form>
  )
}

export default Sales