import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm items-center'>
        <Image src="/logo.png" alt="logo" width={150} height={100} />
        <Button> Get Started </Button>
    </div>
  )
}

export default Header
