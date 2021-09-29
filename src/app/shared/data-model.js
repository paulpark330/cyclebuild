import mongoose from 'mongoose';
const { Schema } from mongoose;

const partSchema = new Schema({
  partId: Number,
  name: String,
  description: String,
  compatibilities: [String],
  imageUrl: String,
})

const baseSchema = new Schema({
  baseId: Number,
  name: String,
  installedParts: [partSchema]
  imageUrl: String,
})
