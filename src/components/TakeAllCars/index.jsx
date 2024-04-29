import { Form, Formik, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as CarActionFinder from "../../redux/actions/carsActionCreators";

const initialValues = {
  cars: [],
};

const TakeAllCars = (props) => {
  const { cars, findAllCarRequest } = props;
  const hendleSubmit = (values, formikBag) => {
    const cars = {
      ...values,
    };
    findAllCarRequest(cars);
    console.log(props.cars);
  };

  const carList = cars.map((car, index) => (
    <li key={index}>
      <div>
        <h1>{`${car.manufacturer}, ${car.model}, ${car.km} - km mileage, ${car.color} - color,`}</h1>
        <h3>{`${car.year} prodaction`}</h3>
      </div>
    </li>
  ));

  return (
    <div>
      <h1>TakeAllCars</h1>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
        <Form>
          <button type="submit">all cars from DB</button>
        </Form>
      </Formik>
      <ul>{carList}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cars: state.car.cars,
  };
}

function mDTp(dispatch) {
  return {
    findAllCarRequest: (cars) =>
      dispatch(CarActionFinder.findAllCarsRequest(cars)),
  };
}

export default connect(mapStateToProps, mDTp)(TakeAllCars);
