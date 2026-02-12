import React from "react";
import { useForm } from "react-hook-form";

function FormClassDemo2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "email is required",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "Age is Required",
      },
      min: {
        value: 18,
        message: "Age should be 18",
      },
      max: {
        value: 60,
        message: "max age is 60",
      },
    },
  };

  function submitHandler(data) {
    console.log(data);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", {
              required: { value: true, message: "name is required" },
            })}
          />
          {errors.name?.message}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", validationSchema.emailValidator)}
          />
          {errors.email?.message}
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            placeholder="Enter age"
            {...register("age", validationSchema.ageValidator)}
          />
          {errors.age?.message}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormClassDemo2;
