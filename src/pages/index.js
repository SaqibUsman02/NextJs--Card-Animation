import Background from '@/component/Background'
import Foreground from '@/component/Foreground'
import React from 'react'

const index = () => {
  return (
    <div className="relative h-screen bg-zinc-600 w-full">
      <Background />
      <Foreground />
    </div>
  )
}

export default index