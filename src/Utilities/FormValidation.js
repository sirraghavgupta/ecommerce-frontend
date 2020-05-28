const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required && isValid) {
    isValid = value.trim() !== '';
  }

  if (rules.minLength && isValid) {
    isValid = value.length >= rules.minLength;
  }

  if (rules.maxLength && isValid) {
    isValid = value.length <= rules.maxLength;
  }

  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (rules.isEmail && isValid) {
    isValid = emailPattern.test(value);
  }

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (rules.validPassword && isValid) {
    isValid = passwordPattern.test(value);
  }

  const phonePattern = /^\d{10}$/;
  if (rules.isPhoneNumber && isValid) {
    isValid = phonePattern.test(value);
  }

  const charOnlyPattern = /^[0-9a-zA-Z]+$/;
  if (rules.isCharOnly && isValid) {
    isValid = charOnlyPattern.test(value);
  }

  return isValid;
};

export default checkValidity;
