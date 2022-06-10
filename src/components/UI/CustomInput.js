import React, {useState} from 'react';

const CustomInput = ({className, placeholder, name, errors, register}) => {
  const [isFocus, setIsFocus] = useState(false)

  console.log(register(name).ref)

  return (
    <div
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      className={isFocus ? "active " + className : className}
    >
      <span className={"labelInput"}>{placeholder}</span>
      <input
        name={name}
        {...register(name)}
      />
      {errors[name]?.message}
    </div>
  );
};

export default CustomInput;
