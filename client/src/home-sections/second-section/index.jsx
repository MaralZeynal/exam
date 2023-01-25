import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";

const SecondSection = () => {
  const [course, setCourse] = useState();

  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/courses`);
    setCourse(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (value) => {
    axios.get(`http://localhost:8080/courses`).then((data) => {
      let search = data.data.filter((el) =>
        el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setCourse(search);
    });
  };

  const handleSort = () => {
    axios.get(`http://localhost:8080/courses`).then((data) => {
      let sortprice = data.data.sort((a,b) =>
        a.price-b.price
      );
      setCourse(sortprice);
    });
    }
  

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/courses/${_id}`);
  };

  return (
    <div id="container">
      <div className="title">
        <div className="line"></div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="searchBox">
          <input type="text" onChange={(e) => handleSearch(e.target.value)} />
          <button onClick={()=>handleSort()}>Sort Price</button>
        </div>
      </div>
      <div className="cardBox">
        <div id="container">
          {course?.map((elem) => {
            return (
              <div className="card">
                <div className="topOfCard">
                  <img src={elem.imgUrl} alt="" />
                  <div>
                    <h3>{elem.level}</h3>
                    <p>{elem.app}</p>
                  </div>
                </div>
                <div className="bottomOfCard">
                  <img src={elem.userImgUrl} alt="" />
                  <div className="nameBox">
                    <Link to={`/detail-page/${elem._id}`}>
                      <p>{elem.name}, </p>
                    </Link>
                    <p>{elem.position}</p>
                  </div>
                  <div className="btn-bg">
                    <p>${elem.price}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(elem._id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
