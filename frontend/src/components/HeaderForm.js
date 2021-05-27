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
    
    
      
     </>
    
  );
  
}