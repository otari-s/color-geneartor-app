import React, { useEffect, useState } from "react";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(`,`);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    let timeOut = setInterval(() => {
      setAlert(false);
    }, 3000);
    return () => clearInterval(timeOut);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">%{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default SingleColor;
