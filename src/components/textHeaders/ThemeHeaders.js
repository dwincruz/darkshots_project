import React, { useState } from "react";

const ThemeHeaders = ({ title }) => {
  const [value, setValue] = useState(title);

  return (
    <>
      <h1 className="custom-headers text-white text-uppercase" id="breakLine">
        {value ?? "No value"}
      </h1>
    </>
  );
};

export default ThemeHeaders;
