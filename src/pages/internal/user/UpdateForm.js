import React, { useEffect, useState } from "react";
const UpdateForm = ({ data }) => {
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  useEffect(() => {
    if (data) {
      setNameValue(data.fullName);
      setContactValue(data.contact);
      setUsernameValue(data.username);
      setPasswordValue(data.password);
    }
  }, [data]);

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

  const updateUserAPI = "http://localhost:3001/api/user/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(updateUserAPI + data._id, {
      method: "put",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameValue,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
      })
      .catch((error) => {
        console.log({ error: error.message });
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
      <div className="col-6">
        <button
          type="submit"
          className="btn btn-light float-start"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default UpdateForm;
