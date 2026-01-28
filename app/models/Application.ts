import { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  time: { type: String, required: true },
});

// This prevents "OverwriteModelError" in Next.js
const Application = models.Application || model("Application", ApplicationSchema);

export default Application;