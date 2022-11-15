export default {
  OK: (results = {}) => ({
    code: 200,
    message: "OK",
    results: results,
  }),
  BAD_REQUEST: (error = "") => ({
    code: 400,
    message: "Bad request",
    error,
  }),
  NOT_FOUND: (error = "") => ({
    code: 404,
    message: "Not found",
    error,
  }),
  INTERNAL_SERVER: (error = "") => ({
    code: 500,
    message: "The server has encountered a situation it does not know how to handle",
    error,
  }),
  ALREADY_EXIST: (error = "") => ({
    code: 1001,
    message: "Already exist",
    error,
  }),
  FIELD_IS_REQUIRED: (error = "") => ({
    code: 1002,
    message: "Field is required",
    error,
  }),
  INVALID_OTP: (error = "") => ({
    code: 1003,
    message: "The OTP is incorrect",
    error,
  }),
}
