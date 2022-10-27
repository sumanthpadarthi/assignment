import React from 'react'
import './App.css'
import{useNavigate } from 'react-router-dom'
import StudentsData from './data.json'
import Newdata from './newdata'

const Students = () => {
    const Navigate = useNavigate()
  return (
    
  <div>
      <button>StudentData</button> 
       <button onClick={() =>{Navigate("/new")}}>New</button> 
       <button onClick={() =>{Navigate("/updataed")}}>Update</button>
      <div className='details'>
        

        <Newdata name="text"/>
      { 
        StudentsData.map(data=> <ol key={data.id}> {data.id}.  {data.studentName}   {data.CollageName} {data.gender} {data.percentage} {data.DOJ}</ol>)

      }
   
    

      </div>

      
     
      
    




    </div>
  )
}

export default Students