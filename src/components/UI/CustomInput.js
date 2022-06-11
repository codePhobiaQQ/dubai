import React, {useEffect, useState} from 'react';
import {maskHandler} from "../mask";
import { MaskedInput  } from 'react-hook-mask';
import arrow from './../../assets/arrow.svg';

const CustomInput = ({
   className,
   type = "string",
   placeholder, name,
   errors,
   register,
   getValues,
   isSelect = false,
   setValue = null,
   list = null,
   imaging = null
 }) => {
  const [isFocus, setIsFocus] = useState(false)

  const [isSelectPopupOpen, setPopupOpen] = useState(false)
  const [selectValue, setSelectValue] = useState(null)

  const onBlurHandler = () => {
    if (!getValues(name)) setIsFocus(false)
  }

  const clickSelectHandler = () => {
    setIsFocus(true)
    setPopupOpen(true)
  }
  const closeSelectHandler = (e, value) => {
    e.stopPropagation()
    if (value) {
      setSelectValue(value)
      setPopupOpen(false)
      setValue(name, value)
    }
    if (!value && !selectValue) {
      setPopupOpen(false)
      setIsFocus(false)
    }
  }

  console.log(imaging)

  return (
      <div
        onFocus={() => setIsFocus(true)}
        onBlur={onBlurHandler}
        className={isFocus ? "active " + className : className}
      >
        {isSelect ? <img className={isSelectPopupOpen ? "arrow active" : "arrow"} src={arrow} alt="arrow"/> : null}
        <span className={errors[name] ? "labelInput error" : "labelInput"}>
          {imaging ? <img className="icon" src={imaging} alt="image"/> : null}
          {placeholder}
        </span>
        {!isSelect ?
          (!name == "Phone" && !name == "CVV" && !name == "Expiration")
          ? <input
            name={name}
            type={type}
            {...register(name)}
          />
          : <MaskedInput
              maskGenerator={maskHandler(name)}
              type={name == "CVV" ? "password" : "string"}
              {...register(name)}
          />
          :
          <div onClick={() => clickSelectHandler(true)} className="select">
            <div className="result">{selectValue}</div>
            <input type="text" name={name} />
            <div
              onClick={(e) => closeSelectHandler(e, "")}
              className={isSelectPopupOpen ? "helperWrap active" : "helperWrap"}>
            </div>
          </div>
        }
        <span className="InputError">{errors[name] ? errors[name]?.message : ""}</span>
        {isSelect ? <div className={isSelectPopupOpen ? "selectPopup active" : "selectPopup"}>
          {list.map((line, index) => (
            <div
              key={"lineSelect" + name + index}
              className="selectLine"
              onClick={(e) => closeSelectHandler(e, line)}
            >
                {line}
            </div>))
          }
        </div> : null}
      </div>
  );
};

export default CustomInput;
