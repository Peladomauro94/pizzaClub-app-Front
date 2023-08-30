import React, { useState } from "react";
import './index.css'

function Dropdown() {
  const [dropdown, setDropdown] = useState("hidden");
  const [optionSelected, setOptionSelected] = useState('delivery')

  const handleChange = () => {
    setDropdown("hidden");
    if (optionSelected === 'delivery'){
        setOptionSelected('pick-up')
    } else {
        setOptionSelected('delivery')
    }
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown__option-selected">
        <img className="dropdown__image" src={optionSelected === 'delivery' ? './motorbike.png' : './bag.png'} alt="" />
        <span className={`dropdown__option-text`}>
          {optionSelected === 'delivery' ? 'Envío a domicilio' : 'Retiro en local'}
        </span>
        <img
          className="dropdown__image"
          src="/arrow.png"
          alt=""
          onClick={() => {
            dropdown === "" ? setDropdown("hidden") : setDropdown("");
          }}
        />
      </div>
      <div className={` dropdown__options ${dropdown}`}>
        <ul>
          <li className='dropdown__options-item' onClick={() => handleChange()}>
            <img className="dropdown__image" src={optionSelected === 'delivery' ? './bag.png' : './motorbike.png'} />
            <span className={`dropdown__option-text`}>
                {optionSelected === 'delivery' ? 'Retiro en local' : 'Envío a domicilio'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
