import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ApiHomeWorkWithPost() {
  const { register, handleSubmit } = useForm();

  async function submitHandler(data) {
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        data
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Api Homework with Post</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter name" {...register("name")} />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            placeholder="Enter Password"
            {...register("password")}
          />
        </div>
        <div>
          <label>Age</label>
          <input type="number" placeholder="Enter age" {...register("age")} />
        </div>
        <div>
          <label>IsActive</label>
          <input type="checkbox" {...register("isActive")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ApiHomeWorkWithPost;
