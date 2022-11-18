export default {
  search_val: {
    name: "search_val",
    type: "string",
    in: "query",
    description: "ค่าที่ต้องการ search",
  },
  sort_field: {
    name: "sort_field",
    schema: {
      type: "array",
      items: {
        type: "string",
        required: true,
      },
      example: ["createdAt"],
    },
    in: "query",
    description: "ชื่อ field ที่ต้องการ sort (รองรับทุก field)",
  },
  sort_order: {
    name: "sort_order",
    schema: {
      type: "array",
      items: {
        type: "integer",
        required: true,
      },
      example: ["-1"],
    },
    in: "query",
    description:
      "1 น้อยไปมาก, -1 มากไปน้อย (รองรับทุก field เป็น stable sort จำนวนที่ใส่ต้องตรงกับจำนวน sort_field)",
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
