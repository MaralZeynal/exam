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

  return (
    <div>
      <div>
        <p>{detail.name}</p>
      </div>
    </div>
  );
};

export default DetailPage;
