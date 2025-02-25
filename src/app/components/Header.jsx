import React from 'react'

function Header() {
  return (
    <header className='bg-black h-[200px] flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-white text-5xl mt-3 font-bold'>Products By Dummy JSON</h1>
        <p className='text-white text-xl mt-3 font-bold'>Develope by Factory</p>
        <form action="" className='flex mt-4'>
            <input type="text" className='bg-white rounded w-full shadow-md py-5 px-3 font-bold' 
            placeholder='Search Product...' />

            <button className='bg-green-500 mx-2 px-3 py-5 rounded-md shadow-md text-white font-bold' type='submit'>Search</button>
        </form>
      </div>
    </header>
  )
}

export default Header
