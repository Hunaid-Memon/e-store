import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "category",
      title: "Product Category",
      type: "string",
    })  ],
});
