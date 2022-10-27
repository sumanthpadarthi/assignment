import React from 'react'
import Students from './Students'
import NewData from './newdata'
import UpdataData from './updata'
import { BrowserRouter,Routes,
  Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
       
          
      
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Students/>}/>
          <Route exact path="/new" element={<NewData/>}/>
          <Route exact  path ='/updataed' element={<UpdataData/>}/>
         
          

         </Routes>
       
      
       
       
       </BrowserRouter>
    
    </div>
  )
}

export default App

