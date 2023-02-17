import config from "../config"

export default {
  openapi: "3.0.3",
  info: {
    title: "Libary APIs",
    description: "This is a simple example NodeJS API project to demonstrate Swagger Documentation",
    version: "1.0.0",
    contact: {
      email: "abc@gmail.com",
    },
    // license: {
    //   name: "Apache 2.0",
    //   url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    // },
  },
  //   schemes: ["http"],
  servers: [
    {
      url: "http://localhost:4000/", // url
      description: "Local server", // name
    },
    {
      url: "http://localhost:4000/todos", // url
      description: "Sit server", // name
    },
  ],
  //   host: `localhost:${config.PORT}`,
  //   basePath: "/api",
  tags: [
    {
      name: "user",
      description: "user tag",
    },
  ],
  paths: {
    "/user": {
      get: {
        tags: ["user"],
        summary: "Get all the user",
        description: "Get all the user",
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              type: "array",
              //   items: {
              //     $ref: "#/definitions/todosResponse",
              //   },
            },
          },
          400: {
            description: "Invalid status value",
            // schema: {
            //   $ref: "#/definitions/InvalidResponse",
            // },
          },
        },
      },
      post: {
        tags: ["user"],
        summary: "Get all the user",
        description: "Get all the user",
        produces: ["application/json"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    format: "int64",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "test test",
                  },
                },
              },
            },
            "application/x-www-form-urlencoded": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    format: "int64",
                    example: 1,
                  },
                  name: {
                    type: "string",
                    example: "test test",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      format: "int64",
                      example: 1,
                    },
                    name: {
                      type: "string",
                      example: "test test",
                    },
                  },
                },
              },
            },
          },
        },
        // parameters: [
        //   {
        //     name: "name",
        //     // in: "formData",
        //     in: "query",
        //     description: "full user name",
        //     required: true,
        //     type: "string",
        //   },
        //   {
        //     name: "age",
        //     in: "query",
        //     description: "user age",
        //     required: true,
        //     type: "integer",
        //   },
        //   {
        //     name: "role",
        //     in: "query",
        //     description: "user role",
        //     required: true,
        //     type: "string",
        //   },
        // ],
      },
    },
    "/user/{id}": {
      get: {
        tags: ["user"],
        summary: "Get the user by id",
        description: "Get the user by id",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "id of user",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              type: "array",
              //   items: {
              //     $ref: "#/definitions/todosResponse",
              //   },
            },
          },
        },
      },
    },
  },
  //   paths: {
  //     "/todos": {
  //       get: {
  //         summary: "Get all the tasks",
  //         description: "Get all the tasks",
  //         produces: ["application/json"],
  //         parameters: [],
  //         responses: {
  //           200: {
  //             description: "successful operation",
  //             schema: {
  //               type: "array",
  //               items: {
  //                 $ref: "#/definitions/todosResponse",
  //               },
  //             },
  //           },
  //           400: {
  //             description: "Invalid status value",
  //             schema: {
  //               $ref: "#/definitions/InvalidResponse",
  //             },
  //           },
  //         },
  //       },
  //     },
  //     "/todo": {
  //       post: {
  //         summary: "Save the task",
  //         description: "Save the task",
  //         produces: ["application/json"],
  //         consumes: ["application/json"],
  //         parameters: [
  //           {
  //             in: "body",
  //             name: "body",
  //             description: "task object",
  //             required: true,
  //             schema: {
  //               type: "object",
  //               properties: {
  //                 task: {
  //                   type: "object",
  //                   $ref: "#/definitions/Task",
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //         responses: {
  //           200: {
  //             description: "successful operation",
  //             schema: {
  //               type: "array",
  //               items: {
  //                 $ref: "#/definitions/todosResponse",
  //               },
  //             },
  //           },
  //           400: {
  //             description: "Invalid status value",
  //             schema: {
  //               $ref: "#/definitions/InvalidResponse",
  //             },
  //           },
  //         },
  //       },
  //     },
  //     "/todos/{id}": {
  //       put: {
  //         summary: "Update the tasks",
  //         description: "Update the tasks",
  //         produces: ["application/json"],
  //         parameters: [
  //           {
  //             name: "id",
  //             in: "path",
  //             description: "task id that needs to be deleted",
  //             required: true,
  //             type: "string",
  //           },
  //           {
  //             in: "body",
  //             name: "body",
  //             description: "task object",
  //             required: true,
  //             schema: {
  //               type: "object",
  //               properties: {
  //                 task: {
  //                   type: "object",
  //                   $ref: "#/definitions/Task",
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //         responses: {
  //           200: {
  //             description: "successful operation",
  //             schema: {
  //               type: "array",
  //               items: {
  //                 $ref: "#/definitions/todosResponse",
  //               },
  //             },
  //           },
  //           400: {
  //             description: "Invalid status value",
  //             schema: {
  //               $ref: "#/definitions/InvalidResponse",
  //             },
  //           },
  //         },
  //       },
  //     },
  //     "/todo/{id}": {
  //       delete: {
  //         summary: "Delete the task",
  //         description: "Delete the task",
  //         produces: ["application/json"],
  //         parameters: [
  //           {
  //             name: "id",
  //             in: "path",
  //             description: "task id that needs to be deleted",
  //             required: true,
  //             type: "string",
  //           },
  //         ],
  //         responses: {
  //           200: {
  //             description: "successful operation",
  //             schema: {
  //               type: "array",
  //               items: {
  //                 $ref: "#/definitions/todosResponse",
  //               },
  //             },
  //           },
  //           400: {
  //             description: "Invalid status value",
  //             schema: {
  //               $ref: "#/definitions/InvalidResponse",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   definitions: {
  //     todosResponse: {
  //       type: "object",
  //       properties: {
  //         id: {
  //           type: "integer",
  //         },
  //         task: {
  //           type: "string",
  //         },
  //         assignee: {
  //           type: "string",
  //         },
  //         status: {
  //           type: "string",
  //         },
  //       },
  //     },
  //     Task: {
  //       type: "object",
  //       properties: {
  //         task: {
  //           type: "string",
  //         },
  //         assignee: {
  //           type: "string",
  //         },
  //         status: {
  //           type: "string",
  //         },
  //       },
  //     },
  //     InvalidResponse: {
  //       type: "object",
  //       properties: {
  //         statusCode: {
  //           type: "string",
  //         },
  //         message: {
  //           type: "string",
  //         },
  //       },
  //     },
  //   },
}
