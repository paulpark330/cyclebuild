require('./schema')
const Joi = require("joi");
const Mongoose = require("mongoose");

const Part = Mongoose.model("Part");
const Bicycle = Mongoose.model("Bicycle");

module.exports = [
  {
    method: "GET",
    path: "/bicycle",
    handler: async (request, h) => {
      try {
        const bicycle = await Bicycle.find().exec();
        return h.response(bicycle);
      } catch (error) {
        console.log(error);
        return h.response(error).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/bicycle/{id}",
    handler: async (request, h) => {
      try {
        const bicycle = await Bicycle.findById(request.params.id).exec();
        return h.response(bicycle);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/part",
    handler: async (request, h) => {
      try {
        const part = await Part.find().exec();
        return h.response(part);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/part/{id}",
    handler: async (request, h) => {
      try {
        const part = await Part.findById(request.params.id).exec();
        return h.response(part);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  },
  {
    method: "PUT",
    path: "/part/{id}",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().optional(),
          installedParts: Joi.array().optional(),
          imageUrl: Joi.string().optional(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },
    handler: async (request, h) => {
      try {
        const result = await Bicycle.findByIdAndUpdate(
          request.params.id,
          request.payload,
          { new: true }
        );
        return h.response(result);
      } catch (error) {
        return h.response(error).code(500);
      }
    },
  },
];
