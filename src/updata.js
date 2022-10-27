import React from 'react'
import SData from './data.json'
import {useState} from 'react'

const Updata = () => {
    const [input,setInput] = useState('')
    const handler = e => {
        setInput(e.target.value)
        for (let i=0; i<SData.length;i++){
            if(SData[i.id]===input){
                console.log(input)
            }
          
        }

      }
    
  return (
    
    <div>
     
         

          
        
        <input placeholder='enterid' value={input} name="input" onChange={handler} type="text"/>
        <br/>
        <div>
          {input}
         

        </div>
       
    
     
    
        
       

       



    </div>
  )
}

export default Updata

