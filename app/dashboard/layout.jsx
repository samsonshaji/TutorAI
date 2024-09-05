import SideBar from './_components/sidebar'
import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
      <div className='md:w-64 hidden md:block'>
        <SideBar />
      </div>
      <div className='md:ml-64'>
        {children}
      </div>
  </div>
  )
}

export default DashboardLayout
