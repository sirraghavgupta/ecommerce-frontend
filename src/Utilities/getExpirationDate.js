const getExpirationDate = (expirationTimeInSeconds) => {
  const expirationDate = new Date(
    new Date().getTime() + expirationTimeInSeconds * 1000
  );
  return expirationDate;
};

export default getExpirationDate;
