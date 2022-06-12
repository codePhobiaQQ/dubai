import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {fadeInMotion} from "./motion";
import close from "../../../assets/close.svg";
import back from "../../../assets/back.svg";

const Done = ({setWhatOpen, whatOpen, cancelHeaderPopupClose, setIsLogActionsOpen, isLogActionsOpen}) => {
  return (
    <>
      <AnimatePresence>
        {whatOpen == 4 &&
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

            <h3>Done!</h3>
            <p className="subtitle">
              A link to reset your password has been sent to yuroch@gmail.com.
            </p>
        </motion.div>)}
      </AnimatePresence>
    </>
  );
};

export default Done;
