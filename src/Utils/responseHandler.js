export default {
  OK: ({ result = {}, description = "Ok" }) => ({
    code: 200,
    description: description,
    results: result,
  }),
  BAD_REQUEST: ({
    description = "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
  }) => ({
    code: 400,
    description: description,
  }),
  UNAUTHORIZED: ({ description = `Unauthorized` }) => ({
    code: 401,
    description: description,
  }),
  FORBIDDEN: ({
    description = `The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.`,
  }) => ({
    code: 403,
    description: description,
  }),
  NOT_FOUND: ({ description = "The server cannot find the requested resource" }) => ({
    code: 404,
    description: description,
  }),
  INTERNAL_SERVER: ({
    description = "The server has encountered a situation it does not know how to handle",
  }) => ({
    code: 500,
    description: description,
  }),
  ALREADY_EXIST: ({ description = "Already exist" }) => ({
    code: 1001,
    description: description,
  }),
  FIELD_IS_REQUIRED: ({ description = "Field is required" }) => ({
    code: 1002,
    description: description,
  }),
  INVALID_OTP: ({ description = "The OTP is incorrect" }) => ({
    code: 1003,
    description: description,
  }),
  GENERAL_EXCEPTION: ({ code = 1001, description = "" }) => ({
    code: code,
    description: description,
  }),
}
