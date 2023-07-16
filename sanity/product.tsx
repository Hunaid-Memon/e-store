import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "pname",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Product Type",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{
        type: "category"
      }]
    }),
     defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
  ],
});
