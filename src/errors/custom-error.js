 const CustomError = class CustomError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = '';
    }
    serializeErrors() { }
  }

module.exports = CustomError;
  