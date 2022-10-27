import React,{useState} from 'react'
//import { useState } from 'react'
import{useNavigate } from 'react-router-dom'

const Newdata = (props) => {

    const Navigate=useNavigate()

    const allData = {
        id:"",
        name:'',
        collegeName:'',
        gender:'',
        percentage:'',
        Doj:''
    }
   
    const [data, setData] = useState(allData);
    const display = () => console.log(data);

    
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitForm =  (e) =>{
    e.preventDefault() 

  }

  

return (
<form onSubmit={onSubmitForm} >
        <input onChange={handleChange} name="id" value={data.id} type="text"/> <br/>
        <input onChange={handleChange} name="name" value={data.name}  type="text"/> <br/>
        <select id = "dropdown">
          <option  onChange={handleChange} name="collegeName" value={data.collegeName}>CollageName</option>
           <option onChange={handleChange} name="collegeName" value={data.collegeName}>abcCollege</option>
           <option onChange={handleChange} name="collegeName" value={data.collegeName}>kcgCollege</option>
           <option onChange={handleChange} name="collegeName" value={data.collegeName}>auCollege</option>
           <option onChange={handleChange} name="collegeName" value={data.collegeName}>vsCollege</option>
           </select> <br/>
    <input onChange={handleChange}  type="radio" value="Male" name="gender" /> Male
    <input onChange={handleChange} type="radio" value="Female" name="gender" /> Female <br/>
        <input onChange={handleChange} value={data.percentage} name="percentage" type="text"/> <br/>
        <input onChange={handleChange} name="Doj" value={data.Doj} type="date"/> <br/>

        <button onClick={display}>Save</button>
        <button onClick={() =>{Navigate("/")}}>Back</button>
        
    <h1 >{props.name}</h1>
   

        





    </form>
  )
}

export default Newdata