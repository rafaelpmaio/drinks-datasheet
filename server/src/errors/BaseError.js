class BaseError extends Error {

  constructor(message = "internal server error", status = 500) {
    super();
    this.status = status;
    this.message = message;

  }
  sendResponse(res) {

    res.status(this.status).json({
      message: this.message,
      status: this.status,
    });

  }
}
export default BaseError;
