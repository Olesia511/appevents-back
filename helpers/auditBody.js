import HttpError from "./HttpError.js";

export const errStatus = (err, data, next) => {
  const { name, code } = err;
  err.status = 400;
  err.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};

export const updateOptions = function (next) {
  this.options.new = true;
  this.options.runValidators = true;

  next();
};

export const emptyObj = function (next) {
  const contact = this._update;

  if (Object.keys(contact).length === 0) {
    throw HttpError(400, "Object is not allowed to be empty");
  }
  next();
};
