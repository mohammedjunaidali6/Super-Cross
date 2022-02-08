import React,{ useState } from "react";
import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
import Foo from './Footer';
import './contact.css';
import { Button } from 'react-bootstrap';
import { contactUs } from "../redux/actions/contact";
import { useHistory } from 'react-router-dom';

const Contact = () => {

  const initialState = { name: "", email: "", message: "" };
  const [formData, setformData] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(contactUs(formData, history));
  };

  return (
    <>
      <div className="sec__one" id="seccontact">
        <title>Contact Us | RoadRules</title>
        <div className="container my-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="card" id="con">
                <h1 className=" font-bold text-primaryColor">Contact Us</h1>
                <div className="text-muted font-medium font-16 text mt-4">
                  How can we help you out? If you fill out the form below, we
                  will try to get back to you ASAP!
                </div>
                <p className="text-muted">
                  <i>Fields marked with an asterisk (*) are required.</i>
                </p>
                <form>
                  <div className="d-flex justify-content-between">
                    <div
                      className="input-group mt-4 w-50"
                      style={{ marginRight: '20px' }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      required
                      placeholder="Name (*)"
                      />
                    </div>
                    <div className="input-group mt-4 w-50">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      placeholder="Email (*)"
                      />
                    </div>
                  </div>
                  <div className="input-group mt-4 w-100">
                    <textarea
                      type="text"
                      className="form-control"
                      name="message"
                    value={formData.message}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="Message (*)"
                    rows="8"
                    ></textarea>
                  </div>
                  <div className="text-center mt-5">
                    <Button className="text-white bg-secondaryColor font-demi btn-blue submit-button"
                     onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foo />
    </>
  );
};

export default Contact;
