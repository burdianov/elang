export const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isEmail = (email) => {
  // eslint-disable-next-line
  const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
};

export const isTooShort = (password) => {
  if (password.length < 6) {
    return true;
  }
  return false;
};

export const isMatch = (password, confirm_password) => {
  if (password === confirm_password) {
    return true;
  }
  return false;
};
