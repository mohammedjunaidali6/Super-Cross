import React, { useState } from "react";
import Test1 from "./test1";
import Test2 from "./test2";
import "./booking.css";
import Foo from "./Footer";

const Booking = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="sec__one">
        <div className="booki">
          <div className="bloc-tabs">
            <button
              id="within"
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Within Surrey
            </button>
            <button
              id="outside"
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Outside Surrey
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <p>
                <Test1 />
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <p>
                <Test2 />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Foo />
    </>
  );
};
export default Booking;
