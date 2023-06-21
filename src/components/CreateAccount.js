import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Store } from "../AppState/Store";
import Card from "../util/card";
import Error from "../util/error";
import account_icon from "./account_icon.png";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const { actions } = useContext(Store);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      actions.addUser({ ...values, balance: 500, transactionHistory: [] });
      alert("Success!");
      setShow(false);
    },
    onReset: (values) => {
      setShow(true);
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Field Required";
      if (!values.email) errors.email = "Field Required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid Email";
      if (!values.password) errors.password = "Field Required";
      if (values.password.length < 8)
        errors.password = "Password Must Be More Than 8 Characters";
      return errors;
    },
  });

  return (
    <>
    <img class="page-img" src={account_icon} width="50" alt="account"/>
      <h5>CREATE ACCOUNT</h5>
      <Card
     
        body={
          show ? (
            <form onSubmit={formik.handleSubmit}>
              <label>Name</label>
              <input
                type="input"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <br />
              {formik.errors.name ? (
                <Error message={formik.errors.name} />
              ) : null}
              <label>Email Address</label>
              <input
                type="input"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <br />
              {formik.errors.email ? (
                <Error message={formik.errors.email} />
              ) : null}
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <br />
              {formik.errors.password ? (
                <Error message={formik.errors.password} />
              ) : null}
              <button
                type="submit"
                className="btn btn-light"
                id="submitBtn"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Create Account
              </button>
            </form>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={formik.handleReset}
              >
                Add Another Account
              </button>
            </>
          )
        }
      />
      <br />
    </>
  );
}
