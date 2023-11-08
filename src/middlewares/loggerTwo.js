const loggerTwo = (request, response, next) => {
	console.log("Log2");
	next();
 };

module.exports = loggerTwo;
