export default {
  OK: (results = {}) => ({
    code: 200,
    message: "OK",
    results: results,
  }),
  NOT_FOUND: (error = "") => ({
    code: 404,
    message: "Not found",
    error,
  }),
  ALREADY_EXIST: (error = "") => ({
    code: 400,
    message: "Already exist",
    error,
  }),
  FIELD_IS_REQUIRED: (error = "") => ({
    code: 401,
    message: "Field is required",
    error,
  }),
  INVALID_OTP: (error = "") => ({
    code: 402,
    message: "The OTP is incorrect",
    error,
  }),
  INTERNAL_SERVER: (error = "") => ({
    code: 500,
    message: "The server has encountered a situation it does not know how to handle.",
    error,
  }),
}
