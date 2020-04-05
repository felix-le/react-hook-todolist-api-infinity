import React, { useState } from "react";

// Helper function
import validateForm from "../../helper/validateForm"


// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

function RegisterPage(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    dataMatch: false,
  });
  const [isSubmitting, setIsSubmitting]=useState(false)

  const [errors, setErrors] = useState({});

  
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    const errors = validateForm({
      ...formValue,
      [name]: value
    });
    setErrors(errors);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      props.history.push("/login-page");
    }
  }
  return (
    <>
      <div className="register-wrapper">
        <div className="container">
          <div className="form">
            <form action=""
              className="register-form"
              onSubmit={handleRegisterSubmit}
              noValidate
            >
              <div className="form-group">
                <Input
                  typeInput="email"
                  nameInput="email"
                  placeholderInput="Please input your email"
                  handleOnChange={handleOnChange}
                  value={formValue.email}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <Input
                  typeInput="password"
                  nameInput="password"
                  placeholderInput="Your password"
                  handleOnChange={handleOnChange}
                  value={formValue.password}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-group">
                <Input
                  typeInput="password"
                  nameInput="confirm-password"
                  placeholderInput="Confirm password"
                  handleOnChange={handleOnChange}
                  value={formValue.confirmPassword}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

              </div>
              <Button
                typeBtn="submit"
                nameBtn="Create"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
