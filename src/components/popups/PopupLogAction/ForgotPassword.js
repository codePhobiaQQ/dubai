import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {fadeInMotion} from "./motion";
import close from "../../../assets/close.svg";
import back from "../../../assets/back.svg";
import CustomInput from "../../UI/CustomInput";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  Email: yup.string().email("Please enter the valid e-mail").required("E-mail can`t be empty"),
}).required();

const ForgotPassword = ({setWhatOpen, whatOpen, cancelHeaderPopupClose, setIsLogActionsOpen, isLogActionsOpen}) => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = data => {
    setWhatOpen(4)
  };

  return (
    <>
      <AnimatePresence>
        {whatOpen == 3 &&
        (<motion.div
          variants={fadeInMotion}
          initial="initial"
          animate="visible"
          // exit="exit"
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
              className={"login innerLogAction"}
            >
              <h3>Forget password</h3>
              <p className="subtitle">
                Enter the email address associated with your account,
                and we`ll email you a link to reset your password
              </p>
              <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"E-mail"} name={"Email"} register={register}  />
              <button className="oftenBtn" type={"submit"}>Send reset link</button>
            </form>
        </motion.div>)}
      </AnimatePresence>
    </>
  );
};

export default ForgotPassword;
