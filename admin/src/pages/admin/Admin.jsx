import React from 'react'
import './admin.css'
import {Routes,Route} from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Addproduct from '../../components/addproduct/Addproduct.jsx'
import Listproduct from '../../components/listproduct/Listproduct.jsx'
const Admin = () => {
  return (
    <div className='admin'>
     <Sidebar/>
     <Routes>
      <Route path ='/addproduct' element={<Addproduct/>}/>\
            <Route path ='/listproduct' element={<Listproduct/>}/>
     </Routes>
   
    </div>

  )
}

export default Admin
