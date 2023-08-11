import React, { useState } from 'react'
import { BiListPlus } from 'react-icons/bi'
import { TbReportSearch } from 'react-icons/tb'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import Table from '../components/Table'

const Articles = () => {
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

  const [count, setCount] = useState(1); // Establecemos el valor inicial del contador en 1

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) { // Verificamos que el contador no sea menor que 1
      setCount(prevCount => prevCount - 1);
    }
  };


  const headerStyle = 'mx-2 py-2 px-3 text-gray-800 text-3xl border-b-2';
  return (
    <div className='p-2 pt-16 h-[calc(100vh - 64px)] flex flex-col'>
      <h1 className={headerStyle}>Articles</h1><div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block w-full py-2 px-2">
            <div
              class="bg-slate-400 font-medium text-slate-100 rounded-md flex justify-between px-5 py-1">
              <h2 class="flex text-base"><TbReportSearch className='h-6 w-6 text-amber-200 mr-1' /> <input type="text" placeholder='Search' className='pl-2 rounded-md  border-b-2 border-slate-500 text-slate-700' /></h2>
              <div className='flex'>
                <button className='bg-amber-500 rounded-sm'><BiListPlus className='h-6 w-6' /></button>
                <button className='bg-amber-500 rounded-sm mx-1'><AiOutlinePlusSquare className='h-6 w-6' /></button>
              </div>
            </div>
            <div class="overflow-y-scroll scroll rounded-md border h-[70vh]">
              <Table data={productsData}/>
            </div>
            <div
              class="bg-slate-400 font-medium text-slate-100 rounded-md flex justify-between px-5 py-1">
              <span class="px-2  my-2">Página:</span>
              <div className='flex'>
                <button onClick={decrement} className='p-1 text-slate-500 bg-slate-200 rounded-full mr-1 my-2'><BsChevronLeft /></button>
                <span className='p-1 my-2'>{count}</span>
                <button onClick={increment} className='p-1 text-slate-500 bg-slate-200 rounded-full ml-1  my-2'><BsChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles