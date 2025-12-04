const checkValidData = (name, email, password) => {
  
  const isNameValid = /^[A-Za-z\s]{2,}$/.test(name);

  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/
      .test(password);

 
   if (!name || !name.trim()) {
   
} else if (!isNameValid) {
  return "Name is not valid";
}
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;
