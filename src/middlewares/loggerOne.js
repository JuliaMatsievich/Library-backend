const loggerOne = (request, response, next) => {
  console.log("Log1");
  next();
};

module.exports = loggerOne;