import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as UserActionCreators from "../../redux/actions/usersAction";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  gender: "",
  birthday: "",
};

const UserCreationForm = (props) => {
  const dispatch = useDispatch();

  const createUserRequest = (userData) => {
    dispatch(UserActionCreators.createUserRequest(userData));
  };

  const handlerSubmit = (values, formikBag) => {
    const userData = {
      ...values,
      isMale: values.gender === "male",
      gender: undefined,
    };
    console.log(userData);

    createUserRequest(userData);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      <Form>
        <Field name="fullName" placeholder="fullName" />
        <Field name="email" placeholder="email" type="email" />
        <Field name="password" placeholder="password" />
        <fieldset>
          <legend>Choose you gender </legend>
          <label>
            <Field name="gender" type="radio" value="male" /> Male
          </label>
          <label>
            <Field name="gender" type="radio" value="female" /> Female
          </label>
        </fieldset>
        <label>Enter your birthday</label>
        <Field name="birthday" type="date" />
        <button type="submit">Create User</button>
      </Form>
    </Formik>
  );
};

// function mDtP (dispatch) {
//   return {
//     createUserRequest: (userData) => dispatch(UserActionCreators.createUserRequest(userData))
//   }
// }

// export default connect(null, mDtP)(UserCreationForm);

export default UserCreationForm;
