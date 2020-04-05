export default function validateForm(formValue) {
  let errors = {};
  const patternEmail = /^[a-z][a-z0-9_]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  if (!formValue.email) {
    errors.email="Email address is required"
  } else if (!patternEmail.test(formValue.email)) {
    errors.email = "Email address is invalid";
  }

  if (!formValue.password) {
    errors.password ="Password is required"
  }
  else if (formValue.password.length < 3) {
    errors.password = "Password need to be more than 8 characters";
  }
  if(formValue.password !== formValue.confirmPassword) {
   errors.confirmPassword = "Password and confirm password did not match"
 }

  return errors;

}