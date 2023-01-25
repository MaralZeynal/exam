import * as Yup from "yup";

export const AddCourseSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  position: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  level: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  app: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imgUrl: Yup.string()
    .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
  userImgUrl: Yup.string()
    .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
    price: Yup.number()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
