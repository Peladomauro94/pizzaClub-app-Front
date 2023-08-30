import React from 'react'
import './index.css'

function NavigatorItem({text}) {
  return (
    <div className='navigatorItem__container'>
        <span>{text}</span>
        <div className='navigatorItem__border'></div>
    </div>
  )
}

export default NavigatorItem