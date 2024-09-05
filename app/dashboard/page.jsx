import React from 'react'
import { UserButton } from '@clerk/nextjs'
import DashboardLayout from './layout'

function Dashboard() {
  return (
      <div>
        <UserButton />
      </div>
  )
}

export default Dashboard
