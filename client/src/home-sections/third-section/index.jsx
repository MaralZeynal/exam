import React from "react";
import "./index.scss";

const ThirdSection = () => {
  return (
    <div className="thirdSection">
      {/* <div id="container"> */}
      {/* <div className="thirdSec"> */}
      <div className="leftSide">
        <div className="textBox">
          <h1>Register now and get a discount 50% discount until 1 January</h1>
        </div>
        <p>
          In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
          tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
          fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
          vitae tempo.
        </p>
        <button>Register Now</button>
      </div>
      <div className="rightSide">
        <img
          src="https://preview.colorlib.com/theme/course/images/search_background.jpg"
          alt=""
        />
        <div className="inputBox">
          <h1>Search for your course</h1>
          <input type="text" placeholder="Course name" />
          <br />
          <input type="text" placeholder="Category" />
          <br />
          <input type="text" placeholder="Degree" />
          <button>Search course</button>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ThirdSection;
