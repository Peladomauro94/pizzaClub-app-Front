import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Dropdown from '../Dropdown';
import './index.css'
import NavigatorItem from '../NavigatorItem';

function TopMain() {
  return (
    <div className="topMain__inital">
          <h1>Pizza Club Yaguarón</h1>
          <div className="topMain__info">
            <div className='topMain__info-item'>
                <StoreIcon color="disabled"/>
                <span>Abierto</span>
            </div>
            <div className='topMain__info-item'>
                <AccessTimeIcon color="disabled"/>
                <span>25-45 min</span>
            </div>
            <Dropdown/>
          </div>
          <div className="topMain__navigator">
            <NavigatorItem text='PIZZAS'/>
            <NavigatorItem text='CALIENTES'/>
            <NavigatorItem text='BEBIDAS'/>
            <NavigatorItem text='PROMOCIONES'/>
          </div>
    </div>
  )
}

export default TopMain