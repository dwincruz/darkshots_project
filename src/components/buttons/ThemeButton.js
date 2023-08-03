import React, { useEffect, useRef, useState } from "react";
import ThemeModal from "../popups/ThemeModal";
import { Link } from "react-router-dom";
const ThemeButton = ({
  textName,
  clickTrigger,
  redirectTo,
  enableTheme,
  enableModal,
  type,
  modalName,
  modalHeader,
  modalBody,
  modalCloseButtonText,
  modalSubmitButtonText,
  modalSubmitAction,
  primary,
}) => {
  const btn = useRef(null);

  useEffect(() => {
    function showModal(val) {
      if (val === true) {
        btn.current.setAttribute("data-bs-target", "#" + modalName);
        btn.current.setAttribute("data-bs-toggle", "modal");
      }
    }
    // function buttonType(val) {
    //   if (val === false) {
    //     btn.current.classList.remove("btn-light");
    //     btn.current.classList.add("btn-transparent");
    //     btn.current.style.color = "white";
    //     btn.current.style.border = "1px solid white";
    //   }
    // }
    // buttonType(primary);
    showModal(enableModal);
  });
  return (
    <>
      {primary === false ? (
        <Link
          ref={btn}
          to={redirectTo}
          type={type ? "submit" : "button"}
          className="btn  btn-dark btn-theme border rounded-0 mx-1 text-uppercase"
          onClick={clickTrigger}
          style={{ fontFamily: "Agdasima-Bold" }}
        >
          <b>{textName ?? "Empty"}</b>
        </Link>
      ) : (
        <Link
          ref={btn}
          to={redirectTo}
          type={type ? "submit" : "button"}
          className="btn btn-light btn-theme  rounded-0 mx-1 "
          onClick={clickTrigger}
          style={
            enableTheme == false
              ? {}
              : { fontFamily: "Agdasima-Bold", textTransform: "capitalize" }
          }
        >
          <b>{textName ?? "Empty"}</b>
        </Link>
      )}
      {enableModal === true ? (
        <ThemeModal
          enableTheme={enableTheme}
          modalName={modalName}
          modalHeader={modalHeader}
          modalBody={modalBody}
          modalCloseButtonText={modalCloseButtonText}
          modalSubmitButtonText={modalSubmitButtonText}
          modalSubmitAction={modalSubmitAction}
        />
      ) : (
        enableModal === false
      )}
    </>
  );
};
export default ThemeButton;
