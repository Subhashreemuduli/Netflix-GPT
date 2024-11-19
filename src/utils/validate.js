export const ValidateData = (name, email, password, isSignInForm) => {
  const isEmailValid = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isSignInForm && (!name || name.trim().length === 0)) {
    return "Full Name is required";
  }
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
