import React from "react";
import { useForm } from "react-hook-form";

function EmployeeFormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validationSchema = {
    employeeNameValidator: {
      required: {
        value: true,
        message: "Employee name is required",
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
    ExperienceValidator: {
      required: {
        value: true,
        message: "Experience is required",
      },
      min: {
        value: 1,
        message: "Minimum Experience 1",
      },
      max: {
        value: 5,
        message: "Maximum Experience 5",
      },
    },
  };
  function submitHandler(data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Employee Form </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Employee Name</label>
          <input
            type="text"
            {...register("Ename", validationSchema.employeeNameValidator)}
          />
          {errors.Ename?.message}
        </div>
        <div>
          <label>Experience</label>
          <input
            type="text"
            {...register("Experience", validationSchema.ExperienceValidator)}
          />
          {errors.Experience?.message}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default EmployeeFormValidation;
