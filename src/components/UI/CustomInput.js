import React, {useState} from 'react';
import { MaskedInput, createDefaultMaskGenerator, DEFAULT_MASK_RULES  } from 'react-hook-mask';

const maskGenerator = {
  rules: DEFAULT_MASK_RULES,
  generateMask: (value) =>
    (value?.replaceAll('-', '').length ?? 0) <= 13
      ? '9-(999)-999-99-99'
      : '9-(999)-999-999-999',
  transform: (v) => v?.toUpperCase(),
};

const CustomInput = ({className, type = "string", placeholder, name, errors, register, getValues}) => {
  const [isFocus, setIsFocus] = useState(false)

  const onBlurHandler = () => {
    if (!getValues(name)) setIsFocus(false)
  }

  return (
      <div
        onFocus={() => setIsFocus(true)}
        onBlur={onBlurHandler}
        className={isFocus ? "active " + className : className}
      >
        <span className={errors[name] ? "labelInput error" : "labelInput"}>{placeholder}</span>
        {!(name == "Phone")
          ? <input
              name={name}
              type={type}
              {...register(name)}
            />
          : <MaskedInput
            maskGenerator={maskGenerator}
            {...register(name)}
          />
        }
        <span className="InputError">{errors[name] ? errors[name]?.message : ""}</span>
      </div>
  );
};

export default CustomInput;
