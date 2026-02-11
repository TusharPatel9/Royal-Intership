import React, { useState } from "react";

function DropDown() {
  const [id, setId] = useState(1);
  let data = [
    { id: 1, country: "India", state: ["Gujarat", "Maharashtra", "Rajasthan"] },
    { id: 2, country: "USA", state: ["California", "Florida", "Texas"] },
    { id: 3, country: "UK", state: ["England", "Scotland", "Wales"] },
  ];

  const selectedCountry = data.find((obj) => obj.id === Number(id));
  console.log(selectedCountry);

  function onChangeHandler(e) {
    console.log(e);
    setId(e.target.value);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>DropDown</h1>

      <select onChange={onChangeHandler}>
        {data.map((obj) => (
          <option value={obj.id} key={obj.id}>
            {obj.country}
          </option>
        ))}
      </select>

      <select>
        {selectedCountry.state.map((state, index) => (
          <option key={index}>{state}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
