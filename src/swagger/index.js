import swaggerAutogen from "swagger-autogen"
import config from "../config"
import swaggerBodyModel from "../models/swagger/body_model"
import swaggerParamsModel from "../models/swagger/params_model"
import path from "path"

const outputFile = "./swagger_output.json"
const endpointsFiles = [
  "../controllers/users/users.controller",
  "../controllers/books/books.controller",
]
const options = {
  openapi: "3.0.3",
}
const doc = {
  info: {
    version: "1.0.0",
    title: "Library API",
    description: "Documentation automatically generated by the <b>swagger-autogen</b> module.",
  },
  servers: [
    {
      url: `http://localhost:${config.PORT}/`, // url
      description: "Local server", // name
    },
    {
      url: "http://localhost:4000/todos", // url
      description: "Sit server", // name
    },
  ],
  //   host: `localhost:${config.PORT}`,
  //   basePath: "/",
  //   schemes: ["http", "https"],
  //   consumes: ["application/json"],
  //   produces: ["application/json"],
  //   tags: [
  //     {
  //       name: "User",
  //       description: "Endpoints",
  //     },
  //   ],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
    petstore_auth: {
      type: "oauth2",
      authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
      flow: "implicit",
      scopes: {
        read_pets: "read your pets",
        write_pets: "modify pets in your account",
      },
    },
  },
  definitions: swaggerBodyModel,
  parameters: swaggerParamsModel,
}

swaggerAutogen(options)(outputFile, endpointsFiles, doc)
// swaggerAutogen(options)(outputFile, endpointsFiles, doc).then(() => {
//   require("../index.js")
// })
