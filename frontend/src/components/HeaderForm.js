import React, { useState, useEffect } from "react";
import style from "../style/headerForm.module.css";

export default function HeaderForm({ translateHeader }) {
  const [animated, setAnimated] = useState(false);
  function handleScroll(e) {
    const wScroll = window.scrollY;
    if (wScroll >= 50) {
      setAnimated(true);
    } else {
      setAnimated(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <>
      <div className={`${style.form} ${animated ? style.animated : ""}`}>
        
        <div
          className={style.HeaderForm}
          style={{
            backgroundColor: animated ? "transparent" : "",
            maxWidth: animated ? "300px" : "853px",
            transition: "200ms all ease-in-out",
            // margin: "auto",
            overflow: "hidden",
            height: animated ? "53px" : "67px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              zIndex: animated ? "0" : "1",
              opacity: animated ? "0" : "1",
              minWidth: "853px",
              transition: "200ms all ease-in-out",
            }}
          >
            
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
}
