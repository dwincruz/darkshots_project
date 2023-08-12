import React, { useEffect, useState } from "react";
const DeleteForm = ({ data }) => {
  const [nameValue, setNameValue] = useState(null);

  useEffect(() => {
    if (data) {
      setNameValue(data.fullName);
    }
  }, [data]);

  const updateUserAPI = "https://darkshots.onrender.com/api/user/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(updateUserAPI + data._id, {
      method: "delete",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data._id,
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
        <p>Proceed to delete user: {nameValue}?</p>
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
export default DeleteForm;
