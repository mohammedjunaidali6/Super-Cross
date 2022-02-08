import React from "react";
import Features from "./choose";
import Foo from "./Footer";
import styles from "./Home.module.css";
import Offers from "./pricing";
// import Testimo from "./testimonial";
import Safe from "./Work";

function HomeNav() {

  return (
    <>
      <div className={`${styles.home}`}>
        <div className="container text-center font-bold py-5">
          <h1 className="hea" style={{fontWeight:'bold', color:'#5b747c'}}>Super Cross Pro Driving</h1>
          <p className="font-medium text-shadow-white"  style={{ fontWeight:'500', color:'#5b747c'}}>
          We offer a selection of ICBC driving test lessons in Surrey and neighboring cities. Each of our driving lessons is conducted with an experienced, friendly and supportive driving instructor who is ICBC accredited.
          </p>
        </div>
      </div>
      <Features /> 
      <Offers />
      <Safe />
      {/* <Testimo /> */}
      < Foo />
    
    </>
  );
}

export default HomeNav;

