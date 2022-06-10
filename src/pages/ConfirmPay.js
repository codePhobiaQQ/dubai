import React from 'react';
import Header from "../hoc/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CustomInput from "../components/UI/CustomInput";

const schema = yup.object({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
}).required();

const ConfirmPay = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Header>
      <section className="ConfirmPay">
         <div className="container container_flex">
            <div className="container__inner">
              <div className="inner-left-container">
                <CustomInput errors={errors} className={"inputMix"} placeholder={"First Name"} name={"FirstName"} register={register} />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2>Confirm and pay</h2>

                  <input className={"inputMix"} placeholder={"First name"} {...register("FirstName")} />
                  <input className="inputMix" placeholder={"Last name"} {...register("LastName")} />
                  <input className="inputMix" placeholder={"E-mail"} {...register("Email")} />
                  <input className="inputMix" placeholder={"Phone number"} {...register("PhoneNumber")} />
                  <input className="inputMix" placeholder={"Check-in time"} {...register("CheckInTime")} />
                  <input className="inputMix" placeholder={"Comment"} {...register("Comment")} />
                  {/*{errors.exampleRequired && <span>This field is required</span>}*/}

                  <h2 className="secondTitle">Pay with</h2>
                  <input className="inputMix" placeholder={"Expiration"} {...register("Expiration")} />
                  <input className="inputMix" placeholder={"CVV"} {...register("CVV")} />
                  {/*<input className="inputMix" type="submit" />*/}
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
