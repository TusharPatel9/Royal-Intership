import React from "react";
import { useForm } from "react-hook-form";

function PasswordFormValidator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const passwordWatch = watch("password");

  const hasCapital = /[A-Z]/.test(passwordWatch);
  const hasLower = /[a-z]/.test(passwordWatch);
  const hasNumber = /\d/.test(passwordWatch);
  const hasSpecial = /[@$!%*?&]/.test(passwordWatch);
  const hasMinLength = passwordWatch?.length >= 8;

  const getColor = (condition) =>
    passwordWatch ? (condition ? "green" : "red") : "white";

  //   console.log(passwordWatch);

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        message: "Password must fulfill below requirement",
      },
    },
  };
  function submitHandler(data) {
    console.log(data);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Password Validation</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          />
          {errors.password?.message}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ color: getColor(hasCapital) }}>
            minimum 1 uppercase letter
          </span>
          <span style={{ color: getColor(hasLower) }}>
            minimum 1 lowercase letter
          </span>
          <span style={{ color: getColor(hasNumber) }}>minimum 1 number</span>
          <span style={{ color: getColor(hasSpecial) }}>
            minimum 1 special character
          </span>
          <span style={{ color: getColor(hasMinLength) }}>
            minimum 8 characters
          </span>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default PasswordFormValidator;
