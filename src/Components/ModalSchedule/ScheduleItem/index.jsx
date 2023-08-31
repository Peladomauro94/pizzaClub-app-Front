import React from 'react'
import './index.css'

function ScheduleItem({day, time}) {
  return (
    <div className='scheduleItem__container'>
        <span>{day}</span>
        <span>{time}</span>
    </div>
  )
}

export default ScheduleItem