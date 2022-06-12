import React, {useEffect, useState} from 'react';
import {maskHandler} from "../mask";
import { MaskedInput  } from 'react-hook-mask';
import arrow from './../../assets/arrow.svg';
import hide from './../../assets/hide.svg';
import show from './../../assets/show.svg';

const CustomInput = ({
   className,
   type = "string",
   placeholder, name,
   errors = {},
   register,
   getValues,
   isSelect = false,
   setValue = null,
   list = null,
   imaging = null,
   mayHide = false,
 }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [isSelectPopupOpen, setPopupOpen] = useState(false)
  const [selectValue, setSelectValue] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (getValues(name)) setIsFocus(true)
  }, [])

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

  const togglePasswordHandler = (value) => {
    setShowPassword(value)
  }


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
          (!name == "Phone" && !name == "CVV" && !name == "Expiration" && !name == "СonfirmPassword")
          ? <input
            type={type}
            {...register(name)}
          />
          : <>
              <MaskedInput
                maskGenerator={maskHandler(name)}
                type={name == "CVV" || name == "Password" || name == "СonfirmPassword"
                  ? (showPassword ? "string" : "password")
                  : "string"}
                {...register(name)}
                />
              {mayHide && (
                showPassword
                  ? <img onClick={() => togglePasswordHandler(false)} src={show} alt="show" className="hide" />
                  : <img onClick={() => togglePasswordHandler(true)} src={hide} alt="hide" className="hide" />)}
            </>
          :
          <div onClick={() => clickSelectHandler(true)} className="select">
            <div className="result">{selectValue}</div>
            <input type={type} {...register(name)} />
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
