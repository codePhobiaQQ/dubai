import React from 'react';
import CustomInput from "../../UI/CustomInput";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  Email: yup.string().email("Please enter the valid e-mail").required("E-mail can`t be empty"),
  Password: yup.string().required("Password can`t be empty"),
}).required();

const Login = () => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = data => {
    console.log(data)
    // reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login innerLogAction">
      <h3>
        Log in
      </h3>
      <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"E-mail"} name={"Email"} register={register}  />
      <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Password"} name={"Password"} register={register} type={"password"} />

      <div className="innerWrapper">
        <div className={errors["checking"] ? "error checkboxWrapper" : "checkboxWrapper"}>
          <input id="cbx" type="checkbox" {...register} name={"RememberMe"} />
          <label className="cbx" htmlFor="cbx">
            <div className="flip">
              <div className="front"></div>
              <div className="back">
                <svg width="16" height="14" viewBox="0 0 16 14">
                  <path d="M2 8.5L6 12.5L14 1.5"></path>
                </svg>
              </div>
            </div>
          </label>
          <span>Remember me</span>
        </div>
        <span className="forgot">Forgot password?</span>
      </div>
      <button className="oftenBtn" type={"submit"}>Log in</button>
      <div className="haveAccount">
        <span>No account? </span>
        <span>Sign up</span>
      </div>
    </form>
  );
};

export default Login;
