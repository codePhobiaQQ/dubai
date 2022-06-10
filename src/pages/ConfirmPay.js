import React from 'react';
import Header from "../hoc/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CustomInput from "../components/UI/CustomInput";

const schema = yup.object({
  FirstName: yup.string().required("First Name can`t be empty"),
  LastName: yup.string().required("Last Name can`t be empty"),
  Email: yup.string().email("Please enter the valid e-mail"),
}).required();

const ConfirmPay = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = data => console.log(data);

  return (
    <Header>
      <section className="ConfirmPay">
         <div className="container container_flex">
            <div className="container__inner">
              <div className="inner-left-container">

                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2>Confirm and pay</h2>
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"First Name"} name={"FirstName"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"E-mail"} name={"Email"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Phone number"} name={"Phone"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Check-in time"} name={"CheckInTime"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Comment"} name={"Comment"} register={register} />
                  {/*{errors.exampleRequired && <span>This field is required</span>}*/}

                  <h2 className="secondTitle">Pay with</h2>
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"Expiration"} name={"Expiration"} register={register} />
                  <CustomInput getValues={getValues} errors={errors} className={"inputMix"} placeholder={"CVV"} name={"CVV"} register={register} type={"password"} />
                  {/*<input className="inputMix" type="submit" />*/}

                  <button type={"submit"}>submit</button>
                </form>
              </div>
              <div className="inner-right-container">
                2
              </div>
            </div>
         </div>
      </section>
    </Header>
  );
};

export default ConfirmPay;
