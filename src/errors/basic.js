export default {
  NOT_FOUND: (error) => ({
    code: 404,
    message: "Not found",
    error,
  }),
  ALREADY_EXIST: (error) => ({
    code: 400,
    message: "Already exist",
    error,
  }),
  FIELD_IS_REQUIRED: (error) => ({
    code: 400,
    message: "Field is required",
    error,
  }),
  INVALID_OTP: (error) => ({
    code: 401,
    message: "The OTP is incorrect",
    error,
  }),
}
