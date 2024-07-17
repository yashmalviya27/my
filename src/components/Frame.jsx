import React from 'react'
import Icones from '../svg/Icones'

function Frame() {
  return (
    <div className='w-full bg-black h-[40px] mt-2 '>
      <Icones/>
    </div>
  )
}


export const Top=()=>{
  return(
    <div className='w-full bg-[#242428] h-[52px] text-2xl rounded-md mb-4 '>
      <div className='ms-8 pt-2' >
      Automation
      
      </div>
    </div>
  )
}

export const Button=()=>{
  return(
    <div className=' flex mt-14 gap-3'>
      <button>Automation</button>
      <button>Integrations</button>
      <button>My Automation</button>
    </div>
  )
}

export default Frame
