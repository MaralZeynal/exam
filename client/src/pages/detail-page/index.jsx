import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  const [detail, setDetail] = useState([]);

  const { _id } = useParams();
  
  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/courses/${_id}`);
    setDetail(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/courses/${_id}`)
  //   .then(response => response.json())
  //   .then(data => setDetail(data.data))
  // },[])

  return (
    <div>
      <div>
        <h1>{detail.name}</h1>
        <p>{detail.position}</p>
        <p>{detail.price}</p>
      </div>
      <div>
        <img src={detail.userImgUrl} alt="" />
      </div>
    </div>
  );
};

export default DetailPage;
