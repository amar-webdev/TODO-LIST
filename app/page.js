"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settilte] = useState("")
  const [description,setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
   setmainTask([...mainTask , {title, description}])

    setdescription("")
    settilte("")
  }

  const deleteHandler = (i) => {
   let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask  = <h2>No Task Avaialabile </h2>

  mainTask.map((t, i) =>{
    renderTask = mainTask.map((t, i) =>{
      return ( <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3'>
        <h5 className='text-2xl		'>{t.title}</h5>
        <p>{t.description}</p>
      </div>
      <button onClick={() =>
        deleteHandler(i)}
      className='bg-emerald-500 text-white font-bold rounded-lg p-4 m-5 w-53'>Delete</button>
      </li>
      )} ); 

    }); 
    
  return (
    <>
    <h1 className='bg-black text-emerald-50 text-center text-5xl font-bold p-4'> Amar Todo List </h1>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Add a new task" className="bg-gray-200 border-2 border-gray-200 rounded-lg  p-4 m-5 w-53"
      value={title}
      onChange={(e)=>{
        settilte(e.target.value)
      }} 
      />
      <input type="text" placeholder=" Enter description here" className="bg-gray-200 border-2 border-200 rounded-lg p-4 m-5 w-53" 
      value={description}
      onChange={(e)=>{
        setdescription(e.target.value)
      }}
      />
      <button
      type="submit" className="bg-emerald-500 text-white font-bold rounded-lg p-4 m-5 w-53">Add</button>
    </form>
    <hr />
    <div className='bg-slate-200 text-black p-8 '>
    <ul>
      {renderTask}
    </ul>
    </div>
    <div>
      <footer>
        <p className='text-center text-gray-500 text-sm'>
          Made with <span className='text-emerald-500'>❤️</span> by <a href='https://github.com/amar-webdev' className='text-emerald-500'>Amar</a>
        </p>
      </footer>
    </div>
    </>
  )
}

export default page