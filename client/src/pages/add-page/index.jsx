import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { AddCourseSchema } from "./schema/index.js";
import "./index.scss";
import { useNavigate } from "react-router";

const AddPage = () => {
  const navigate = useNavigate();
  return (
    <div id="container">
      <div className="addCourse">
        <h1>Add course</h1>
        <Formik
          initialValues={{
            name: "",
            position: "",
            level: "",
            app: "",
            imgUrl: "",
            userImgUrl: "",
            price: "",
          }}
          validationSchema={AddCourseSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            axios.post(`http://localhost:8080/courses`, values);
            navigate("/home-page");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="position" />
              {errors.position && touched.position ? (
                <div>{errors.position}</div>
              ) : null}
              <Field name="level" />
              {errors.level && touched.level ? <div>{errors.level}</div> : null}
              <Field name="app" />
              {errors.app && touched.app ? <div>{errors.app}</div> : null}
              <Field name="imgUrl" />
              {errors.imgUrl && touched.imgUrl ? (
                <div>{errors.imgUrl}</div>
              ) : null}
              <Field name="userImgUrl" />
              {errors.userImgUrl && touched.userImgUrl ? (
                <div>{errors.userImgUrl}</div>
              ) : null}
              <Field name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddPage;
