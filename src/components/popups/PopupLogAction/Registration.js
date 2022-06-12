import React from 'react';
import CustomInput from "../../UI/CustomInput";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {motion, AnimatePresence} from "framer-motion";
import {fadeInMotion} from "./motion";
import close from "../../../assets/close.svg";
import back from "../../../assets/back.svg";

const schema = yup.object({
  FirstName: yup.string().required("First Name can`t be empty"),
  LastName: yup.string().required("Last Name can`t be empty"),
  Country: yup.string().required("Last Name can`t be empty"),
  Email: yup.string().email("Please enter the valid e-mail").required("E-mail can`t be empty"),
  Password: yup.string().required("Password can`t be empty"),
  Phone: yup.string()
    .min(5, "Please enter the valid Phone number")
    .max(20, "Please enter the valid Phone number")
    .required("Phone can`t be empty"),
}).required();

const Registration = ({setWhatOpen, whatOpen, cancelHeaderPopupClose, setIsLogActionsOpen, isLogActionsOpen}) => {
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
        {whatOpen == 2 &&
        (<motion.div
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
          <img
            className="backing"
            src={back} alt="back"
            onClick={() => setWhatOpen(1)}
          />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={whatOpen == 2 ? "login innerLogAction active" : "login innerLogAction"}
            >
              <h3>Sing Up</h3>
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"First Name"} name={"FirstName"} register={register} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Last Name"} name={"LastName"} register={register} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"E-mail"} name={"Email"} register={register}  />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Confirm E-mail"} name={"ConfirmEmail"} register={register} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Country of residence"} name={"Country"} register={register} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Phone number"} name={"Phone"} register={register} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Password"} name={"Password"} register={register} type={"password"} />
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Confirm password"} name={"СonfirmPassword"} register={register} type={"password"} />

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
                  <span onClick={() => setWhatOpen(3)}>By joining, I agree to  One Terms and Conditions
                  and confirm that I am at least 18 years of age.</span>
                </div>
              </div>
              <button className="oftenBtn" type={"submit"}>Sign up</button>
              <div className="haveAccount">
                <span>Have account? </span>
                <span onClick={() => setWhatOpen(1)}>Log in</span>
              </div>
            </form>
        </motion.div>)}
      </AnimatePresence>
    </>
  );
};

export default Registration;
