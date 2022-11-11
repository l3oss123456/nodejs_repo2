export default {
  search_val: {
    name: "search_val",
    type: "string",
    in: "query",
    description: "ค่าที่ต้องการ search",
  },
  page: {
    name: "page",
    type: "integer",
    in: "query",
    description: "pagination (page to show)",
    required: true,
    example: 1,
  },
  per_page: {
    name: "per_page",
    type: "integer",
    in: "query",
    description: "pagination (number of doc to show in each page)",
    required: true,
    example: 10,
  },
}

// #swagger.parameters['search_val'] = {
//     in: "query",
//     description: "ค่าที่ต้องการ search",
//     type: "string",
//   }
//   #swagger.parameters['page'] = {
//     in: "query",
//     description: "pagination (page to show)",
//     type: "integer",
//     require: true,
//   }
//   #swagger.parameters['per_page'] = {
//     in: "query",
//     description: "pagination (number of doc to show in each page",
//     type: "integer",
//     require: true,
//   }
