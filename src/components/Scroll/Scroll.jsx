import React, { useState } from "react";
import { useWindowScroll } from "react-use";
import "./Scroll.css";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";

function Scroll() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 1000) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) {
    return false;
  }

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <IoIosArrowUp className="icon" />
    </div>
  );
}

export default Scroll;
