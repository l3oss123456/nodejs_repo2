export default {
  OK: ({ result = {}, description = "Ok" }) => ({
    code: 200,
    description: description,
    results: result,
  }),
  BAD_REQUEST: ({ error = "", description = "Bad request" }) => ({
    code: 400,
    description: description,
    error,
  }),
  NOT_FOUND: ({ error = "", description = "Not found" }) => ({
    code: 404,
    description: "Not found",
    error,
  }),
  INTERNAL_SERVER: ({
    error = "",
    description = "The server has encountered a situation it does not know how to handle",
  }) => ({
    code: 500,
    description: description,
    error,
  }),
  ALREADY_EXIST: ({ error = "", description = "Already exist" }) => ({
    code: 1001,
    description: description,
    error,
  }),
  FIELD_IS_REQUIRED: ({ error = "", description = "Field is required" }) => ({
    code: 1002,
    description: description,
    error,
  }),
  INVALID_OTP: ({ error = "", description = "The OTP is incorrect" }) => ({
    code: 1003,
    description: description,
    error,
  }),
  GENERAL_EXCEPTION: ({ code = 1001, description = "" }) => ({
    code: code,
    description: description,
  }),
}
