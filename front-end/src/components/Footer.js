// import { green } from '@material-ui/core/colors';
import React from 'react'
import "./Home.module.css"

function Foo (){
    return(
        <div className="container-fluid" id="footer" style={{backgroundColor:'#dee2e6'}}>
        <footer className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
              <div className=" footer-card px-3">
                <h3 className="text-primaryColor font-bold mb-4">Company</h3>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Work with us
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Privacy Notice
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  Term of Service
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  {' '}
                  +91&nbsp;(970)&nbsp;130-3201
                </div>
                <div className="text-primaryColor font-demi font-15 mb-3  hoverable">
                  junaidali1507@gmail.com
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
              <div className=" footer-card px-3">
                <h3 className="text-primaryColor font-bold mb-4">Support</h3>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Help Center
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Contact Us
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Request a New Feature
                </div>
                <div className="text-primaryColor font-demi font-15 mb-lg-3 mb-2 hoverable">
                  Report an Outage
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-4">
              <div className=" footer-card px-3"></div>
              <div>
                <img
                  src="https://15.ie/wp-content/uploads/2016/02/Supercross-Logo.jpg"
                  className="pic"
                ></img>
              </div>
            </div>
          </div>
          <div className="text-primaryColor text-center font-demi font-15 ">
            <span>@ 2021 all rights reserved</span>
          </div>
        </footer>
      </div>
   
);
}
export default Foo;