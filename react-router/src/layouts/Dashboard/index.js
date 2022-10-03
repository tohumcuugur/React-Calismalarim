import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

function DashboardLayout() {
  return (

    <div>
        <Menu />
        <div id='content'>
            <Outlet /> 
        </div>

        
    </div>
  )
}

//react router ile katmanlı site yapısını kullanabiliriz.İç içe oluşturulmuş route işlemlerinde içteki route içeriğinin sayfanın neresinde gösterileceğini belirten React Route komponenti Outletdir.Yani parent element olan bir route tanımladık ve bunun altında olan child rootları react-router'de bulunan <Outlet /> komponenti ile çektik
export default DashboardLayout