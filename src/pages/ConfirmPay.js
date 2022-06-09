import React from 'react';
import Header from "../hoc/Header";
import { useForm } from "react-hook-form";

const ConfirmPay = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Header>
      <section className="ConfirmPay">
         <div className="container container_flex">
            <div className="container__inner">
              <div className="inner-left-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <input defaultValue="test" {...register("example")} />

                  {/* include validation with required or other standard HTML validation rules */}
                  <input {...register("exampleRequired", { required: true })} />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && <span>This field is required</span>}

                  <input type="submit" />
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
