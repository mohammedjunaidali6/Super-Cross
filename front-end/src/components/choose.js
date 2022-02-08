import styles from "./Home.module.css";
import React from "react";


function Features() {

  return (
    <div className="mt-5">
            <div className={`container ${styles.pySection} px-4`}>
            <h2
              className={`font-bold text-primaryColor mb-5 text-center ${styles.mobileCenter}`}
            >
              Why Choose Us? <br />
            </h2>
    
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <img src="https://www.roadrules.info/images/test.jpg" style={{width:"100%" , height:"230px"}} className="rounded mb-5"></img>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 text-primaryColor font-demi">
                    <p>
                    Road Rules Driving School offers a variety of services that will be beneficial to our students, which will develop good driving skills, and habits while being trained by our well educated and experienced instructor.
                    </p>
                    <p>Besides basic driving skills, Road Rules Driving School can also assist you in overcoming your driving weaknesses. In fact we pride ourselves in helping you convert your driving problems into strengths.
                    </p>
                    <p>We offer winter driving, parallel parking and customized courses which fit your needs so that you can hone up those skills that worry you most. No matter what your driving difficulty, for example, reversing, snow driving, hill starts and parking or anything else, our instructors will fully focus on teaching you until you are confident and at ease.
                    </p>
                </div>
            </div>
          </div>
    </div>
  );
}

export default Features;
