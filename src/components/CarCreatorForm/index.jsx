import { Form, Formik, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as CarActionCreation from "../../redux/actions/carsActionCreators";

const initialValues = {
  model: "",
  year: "",
  manufacturer: "",
  km: "",
  color: "",
  isLeft: "",
};

const CarCreatorForm = ({ createCarRequest }) => {
  const hendleSubmit = (values, formikBag) => {
    const carData = {
      ...values,
      isLeft: values.isLeft === "left",
    };

    createCarRequest(carData);
  };

  return (
    <div>
      <h1>CarCreatorForm</h1>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
        <Form>
          <Field name="model" placeholder="model" />
          <Field name="year" type="year" placeholder='enter year'/>
          <Field name="manufacturer" placeholder="manufacturer" />
          <Field name="km" placeholder="km" type="number" />
          <Field name="color" placeholder="color" />
          <fieldset>
            <legend>Choose you car style </legend>
            <label>
              <Field name="isLeft" type="radio" value="left" /> left
            </label>
            <label>
              <Field name="isLeft" type="radio" value="right" /> right
            </label>
          </fieldset>
          <button type="submit">Create new car</button>
        </Form>
      </Formik>
    </div>
  );
};

const mDtP = (dispatch) => {
  return {
    createCarRequest: (carData) =>
      dispatch(CarActionCreation.createCarRequest(carData)),
  };
};

export default connect(null, mDtP)(CarCreatorForm);
