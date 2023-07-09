import React, { useEffect, useRef, useState } from "react";

const ThemeHeaders = ({ title }) => {
  const [valueHeader, setValueHeader] = useState(title);
  const formmattedHeaders = useRef(null);
  useEffect(() => {
    const textHandler = (str) => {
      const splitString = str
        .split(" ")
        .map((item, index) => {
          return index == 1 ? item + "<br>" : item ?? item;
        })
        .join(" ");
      // const reverseString = splitString.reverse();
      formmattedHeaders.current.innerHTML = splitString;
      return splitString;
    };
    textHandler(valueHeader);
  });
  return (
    <>
      <h1
        className="custom-headers text-white text-uppercase my-5"
        ref={formmattedHeaders}
      ></h1>
    </>
  );
};

export default ThemeHeaders;
