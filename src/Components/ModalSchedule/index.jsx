import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import './index.css'
import ScheduleItem from './ScheduleItem';

function ModalSchedule() {
  return (
    <div className="modal__schedule">
        <div className="modal__schedule-top">
            <button><CancelIcon/></button>
            <span>Horario de Atención</span>
            <div></div>
        </div>
        <div>
            <ScheduleItem day={'Lunes'} time={'Cerrado'}/>
            <ScheduleItem day={'Martes'} time={'19:00 - 00:00'}/>
            <ScheduleItem day={'Miércoles'} time={'Cerrado'}/>
            <ScheduleItem day={'Jueves'} time={'Cerrado'}/>
            <ScheduleItem day={'Viernes'} time={'Cerrado'}/>
            <ScheduleItem day={'Sábado'} time={'Cerrado'}/>
            <ScheduleItem day={'Domingo'} time={'Cerrado'}/>
        </div>
        <div></div>
    </div>
  )
}

export default ModalSchedule