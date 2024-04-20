"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
      <h1 className='bg-black text-5xl text-white px-5 font-bold text-center'>
      My ToDo List</h1>
      <form>
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
          placeholder='Enter Task here'
        />
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
          placeholder='Enter Description here'
        />
        <button 
        className='bg-black text-white px-4 py-2 rounded font-bold text-2xl mg-5'>
        Add task</button>
      </form>
    </>
  )
}

export default page