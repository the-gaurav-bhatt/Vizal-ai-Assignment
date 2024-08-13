import mongoose, { InferSchemaType, Schema, model } from "mongoose";

// Define the schema
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true, // Ensure price is provided
    min: [0, "Price must be a positive number"],
  },
  description: {
    type: String,
    trim: true, // Remove extra whitespace from description
    maxlength: 500,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create TypeScript type from schema
export type Iitem = InferSchemaType<typeof itemSchema>;

// Create the model
const Item = model<Iitem>("Item", itemSchema);

export default Item;
