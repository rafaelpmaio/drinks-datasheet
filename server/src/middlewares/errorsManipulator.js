import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import ValidationError from "../errors/ValidationError.js";
import BadRequest from "../errors/BadRequest.js";

// eslint-disable-next-line no-unused-vars
function errorsManipulator(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new BadRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorsManipulator;
