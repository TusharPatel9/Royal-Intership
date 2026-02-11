import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormHW1() {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [isShow, setIsShow] = useState(false);

  function submitHandler(data) {
    console.log(data);
    setUserData(data);
    setIsShow(true);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <label>Gender: </label>
          MALE: <input type="radio" value="male" {...register("gender")} />
          FEMALE : <input type="radio" value="female" {...register("gender")} />
        </div>

        <div>
          <label>Hobbies</label>
          cricket:{" "}
          <input type="checkbox" value="cricket" {...register("Hobbies")} />
          Listen Song:{" "}
          <input type="checkbox" value="Listen Song" {...register("Hobbies")} />
          Play Mobile game:{" "}
          <input
            type="checkbox"
            value="Play Mobile game"
            {...register("Hobbies")}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {isShow && (
        <div>
          <h3>Name:{userData.name}</h3>
          <h3>Email:{userData.email}</h3>
          <h3>password:{userData.password}</h3>
          <h3>Gender:{userData.gender}</h3>
          <ul>
            {userData.Hobbies.map((hoobby) => (
              <li>{hoobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormHW1;
