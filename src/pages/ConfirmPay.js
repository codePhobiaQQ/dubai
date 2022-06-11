import React from 'react';
import Header from "../hoc/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import wallet from "./../assets/wallet.svg";
import * as yup from "yup";
import CustomInput from "../components/UI/CustomInput";
import Details from "../components/ConfirmAndPay/Details";

const schema = yup.object({
  FirstName: yup.string().required("First Name can`t be empty"),
  LastName: yup.string().required("Last Name can`t be empty"),
  Pay: yup.string().required("Credit or debit card can`t be empty"),
  CheckInTime: yup.string().required("Check-in time can`t be empty"),
  // checking: yup.bool().required(""),
  Email: yup.string().email("Please enter the valid e-mail").required("E-mail can`t be empty"),
  Phone: yup.string()
    .min(5, "Please enter the valid Phone number")
    .max(20, "Please enter the valid Phone number")
    .required("Phone can`t be empty"),
  CVV: yup.string().length(3, "Please enter the valid CVV").required("CVV can`t be empty"),
  Expiration: yup.string().length(5, "Please enter the valid Expiration").required("Expiration can`t be empty")
}).required();

const ConfirmPay = () => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const timeList = [
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
  ]

  const payingList = [
    "Paypal",
    "Apple Pay",
    "Google pay",

  ]

  const onSubmit = data => {
    console.log(data)
    // reset()
  };

  return (
    <Header>
      <section className="ConfirmPay">
        <div className="container">
          <h2>Confirm and pay</h2>
        </div>
         <div className="container container_flex">
            <div className="container__inner">
              <div className="inner-left-container">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"First Name"} name={"FirstName"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Last Name"} name={"LastName"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"E-mail"} name={"Email"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Phone number"} name={"Phone"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Check-in time"} name={"CheckInTime"} register={register} isSelect={true} setValue={setValue} list={timeList} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Comment"} name={"Comment"} register={register} />
                  {/*{errors.exampleRequired && <span>This field is required</span>}*/}

                  <h2 className="secondTitle">Pay with</h2>
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix allWidth"} placeholder={"Credit or debit card"} name={"Pay"} register={register} isSelect={true} setValue={setValue} list={payingList} imaging={wallet} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Expiration"} name={"Expiration"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"CVV"} name={"CVV"} register={register} type={"password"} />
                  {/*<input className="inputMix" type="submit" />*/}

                  <div className={errors["checking"] ? "error checkboxWrapper" : "checkboxWrapper"}>
                    <input id="cbx" type="checkbox" {...register} name={"checking"} />
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
                    <span>I will present a valid ID during check-in. I also agree to the Terms and Conditions.</span>
                  </div>

                  <button className="oftenBtn" type={"submit"}>Confirm and book</button>
                </form>
              </div>
              <div className="inner-right-container">
                <Details />
              </div>
            </div>
         </div>
      </section>
    </Header>
  );
};

export default ConfirmPay;
