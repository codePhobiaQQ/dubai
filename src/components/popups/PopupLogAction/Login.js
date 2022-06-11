import React from 'react';
import CustomInput from "../../UI/CustomInput";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AnimatePresence, motion} from "framer-motion";
import {fadeInMotion} from "./motion";
import close from "../../../assets/close.svg";

const schema = yup.object({
  Email: yup.string().email("Please enter the valid e-mail").required("E-mail can`t be empty"),
  Password: yup.string().required("Password can`t be empty"),
}).required();

const Login = ({setWhatOpen, whatOpen, cancelHeaderPopupClose, setIsLogActionsOpen}) => {

  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = data => {
    console.log(data)
    // reset()
  };

  return (
    <>
      <AnimatePresence>
        {whatOpen == 1 &&
        <motion.div
            variants={fadeInMotion}
            initial="initial"
            animate="visible"
            exit="exit"
            onClick={(e) => cancelHeaderPopupClose(e)}
            className="HeaderPopup"
          >
          <img
            className="close"
            src={close} alt="close"
            onClick={() => setIsLogActionsOpen(false)}
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={whatOpen == 1 ? "login innerLogAction active" : "login innerLogAction"}
          >
            <h3>Log in</h3>
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
              <span onClick={() => setWhatOpen(3)} className="forgot">Forgot password?</span>
            </div>
            <button className="oftenBtn" type={"submit"}>Log in</button>
            <div className="haveAccount">
              <span>No account? </span>
              <span onClick={() => setWhatOpen(2)}>Sign up</span>
            </div>
          </form>
        </motion.div>}
      </AnimatePresence>
    </>)
  };

export default Login;
