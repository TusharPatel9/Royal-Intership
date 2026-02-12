import React from "react";
import { useForm } from "react-hook-form";

function ProductFormValidator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSchema = {
    pnameValidator: {
      required: {
        value: true,
        message: "Product name is required",
      },
      minLength: {
        value: 5,
        message: "Minimum 5 character is required",
      },
      maxLength: {
        value: 30,
        message: "Maximum 30 character is allowed",
      },
    },
    quantityValidator: {
      required: {
        value: true,
        message: "Quantity is required",
      },
      min: {
        value: 1,
        message: "Minimum value: 1",
      },
      max: {
        value: 10,
        message: "Maximum value: 10",
      },
    },
  };

  function submitHandler(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Product Form Validator</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("Pname", validationSchema.pnameValidator)}
          />
          {errors.Pname?.message}
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="text"
            {...register("Quantity", validationSchema.quantityValidator)}
          />
          {errors.Quantity?.message}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ProductFormValidator;
