"use client";

import React, { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { deliveryForm, infoForm } from "@/constants/checkoutForm";
import usePaymentModal from "@/hooks/usePayment";

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: number;
  date: string;
  deliveryLocation: string;
  landmark?: string;
}

const InfoForm = () => {
  const onOpen = usePaymentModal((state) => state.onOpen);
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    fullName: z.string().min(3),
    phoneNumber: z.number(),
    date: z.string().min(3),
    deliveryLocation: z.string().min(3),
    landmark: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = () => onOpen();

  return (
    <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
      <h4>Contact</h4>
      <div className="contact">
        {infoForm.map((data) => (
          <Fragment key={data.id}>
            <label htmlFor={data.id}>{data.name}</label>
            <input
              type={data.type}
              id={data.id}
              {...register(`${data.id}`, {
                valueAsNumber: data.id === "phoneNumber",
              })}
            />
            {errors[data.id] && (
              <span className="error">{errors[data.id]?.message}</span>
            )}
          </Fragment>
        ))}
      </div>
      <h4>Delivery Details</h4>
      <div className="delivery-details">
        {deliveryForm.map((data) => (
          <Fragment key={data.id}>
            <label htmlFor={data.id}>{data.name}</label>
            <input type={data.type} id={data.id} {...register(`${data.id}`)} />
            {errors[data.id] && (
              <span className="error">{errors[data.id]?.message}</span>
            )}
          </Fragment>
        ))}
      </div>
      <button>Proceed to Payment</button>
    </form>
  );
};

export default InfoForm;
