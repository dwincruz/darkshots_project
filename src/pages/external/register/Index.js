import React, { useEffect, useState } from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";
import { Link, Navigate } from "react-router-dom";
const Index = () => {
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const apiEndpoint = "http://localhost:3001/api/user";
  const registerContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
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
  const handleBack = (e) => {
    window.location.href = window.origin;
    <Navigate to="/" />;
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
        if (response.status === 200) {
          response.json();
          alert("successfully created");
          setTimeout(() => {
            <Navigate to="/" />;
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // .finally(() => {
    //   setTimeout(() => {
    //     alert("success");
    //     setNameValue("");
    //     setContactValue("");
    //     setUsernameValue("");
    //     setPasswordValue("");
    //     <Navigate to="/admin/users" />;
    //   }, 1000);
    // });
  };
  const textHeading = "Register as new Client";

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={registerContent}
    >
      <div className="row">
        <div className="col-12 ">
          <form className="row">
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField
                name="client name"
                type="text"
                value={nameValue}
                clickTrigger={handleClientName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="contact number / email"
                type="text"
                value={contactValue}
                clickTrigger={handleContact}
              />
            </div>
            <div className="col-6">
              <InputField
                name="username"
                type="text"
                value={usernameValue}
                clickTrigger={handleUserName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="password"
                type="password"
                value={passwordValue}
                clickTrigger={handlePassword}
              />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton
                  textName="Register"
                  type="submit"
                  clickTrigger={handleSubmit}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-2">
          <div className="float-start">
            <Link
              to={window.origin}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              style={{ fontFamily: "Agdasima-Bold" }}
            >
              <i className="ri-arrow-left-line "></i>
              back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
