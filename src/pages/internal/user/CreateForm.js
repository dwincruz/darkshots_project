import React, { useEffect, useState } from "react";
const CreateForm = () => {
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const apiEndpoint = "https://darkshots.onrender.com/api/user";

  const handleClientName = (event) => {
    setNameValue(event.target.value);
  };
  const handleContact = (event) => {
    setContactValue(event.target.value);
  };
  const handleUserName = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(apiEndpoint, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: nameValue,
        contact: contactValue,
        username: usernameValue,
        password: passwordValue,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setTimeout(() => {
          alert("success");
          setNameValue("");
          setContactValue("");
          setUsernameValue("");
          setPasswordValue("");
        }, 5000);
      });
  };
  return (
    <form className="row">
      <div className="col-6 mb-3">
        <input
          type="text"
          placeholder="Account Name"
          className="form-control"
          onChange={handleClientName}
          value={nameValue || ""}
        />
      </div>
      <div className="col-6 mb-3">
        <input
          type="text"
          placeholder="Contact number / Email"
          className="form-control"
          onChange={handleContact}
          value={contactValue || ""}
        />
      </div>
      <div className="col-6 mb-3">
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          onChange={handleUserName}
          value={usernameValue || ""}
        />
      </div>
      <div className="col-6 mb-3">
        <input
          type="text"
          placeholder="Password"
          className="form-control"
          onChange={handlePassword}
          value={passwordValue || ""}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-light" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default CreateForm;
