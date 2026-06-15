import React from 'react'
import { useState,useEffect } from 'react'
import Doctorcard from './Doctorcard'
function Home({newdoctor}) {
    let [doctors,setDoctors]=useState([])
    const [search,setSearch]=useState("")
    const [specialization,setSpecialization]=useState("")
    function fetchdata(){
        let data = [

                {

                    id: 1,

                    name: "Teja",

                    age: 26,

                    gender: "Male",

                    specialization: "Muscles",

                    salary: 7000000

                },


                {

                    id: 2,

                    name: "Sam",

                    age: 26,

                    gender: "Male",

                    specialization: "Bones",

                    salary: 4000000

                },


                {

                    id: 3,

                    name: "Anu",

                    age: 25,

                    gender: "Female",

                    specialization: "Heart",

                    salary: 5000000

                }

            ]

            setDoctors(data)
            // console.log(doctors)
    }
    useEffect(()=>{
        fetchdata()
    },[])

    useEffect(()=>{
        if (newdoctor){
        setDoctors(prev=>[...prev,newdoctor])
        }
    },[newdoctor])

    const filtereddoctors=doctors.filter((val)=>{
        return (val.name.toLowerCase().includes(search))
        && (specialization=="" || val.specialization==specialization)
    })

  return (
    
    <div>
        <div className='filters'>
            <input className="text-field" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search doctor"/>
            <select className='text-field' value={specialization} onChange={(e)=>setSpecialization(e.target.value)}>
                <option value="Muscles">muscles</option>
                <option value="Bones">bones</option>
                <option value="Heart">heart</option>
            </select>
        </div>
        {filtereddoctors.length>0?<div className='doctorparent'>
            {filtereddoctors.map((doctor)=>{
                return(
                    <Doctorcard key={doctor.id} name={doctor.name} specialisation={doctor.specialization} gender={doctor.gender}/>
                )
            })}
        </div>:<h1>No doctors found</h1>}
    </div>
  )
}

export default Home