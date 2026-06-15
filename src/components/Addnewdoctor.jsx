import React from 'react'
import { useState } from 'react'
import Home from './Home'
function AddNewDoctor() {
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [age,setAge]=useState('')
  const [salary,setSalary]=useState('')
  const [specialisation,setSpecialisation]=useState('')
let [newdoctor,setNewdoctor]=useState(null)
  function handlesubmit(e){
    e.preventDefault()
    let formdata={
      name,age,gender,salary,specialisation,id:Date.now()
    }
    setNewdoctor(formdata)
  }

  return (
    <div>
        <h2>Add New Doctor</h2>
        <form action="" className='form-container' onSubmit={handlesubmit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Doctor Name' className='text-field'></input>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder='Enter Age' className='text-field'></input>
            <select value={gender} onChange={(e)=>setGender(e.target.value)} name="" id="">
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input value={specialisation} onChange={(e)=>setSpecialisation(e.target.value)} type="text" placeholder='Enter Specialization' className='text-field'></input>
            <input value={salary} type="number" onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary' className='text-field'></input>
            <button type="submit">Add Doctor</button>
        </form>
        <Home newdoctor={newdoctor}/>
    </div>
  )
}

export default AddNewDoctor