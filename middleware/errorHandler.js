const errorHandler = (error, request, response, next) => {
  console.error(error.stack);
  response.status(500).json({ message: "Something went wrong!" });
  next();
};

export default errorHandler;
