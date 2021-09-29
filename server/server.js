const Hapi = require("@hapi/hapi");
const Joi = require("joi");
const Mongoose = require("mongoose");
const { Schema } = Mongoose;

const server = new Hapi.server({
  host: "localhost",
  port: 3000,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type", "Access-Control-Allow-Origin"],
      additionalHeaders: ["X-Requested-With"],
    },
  },
});

main().catch((err) => console.log(err));

async function main() {
  await Mongoose.connect("mongodb://localhost/cyclebuild", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connection open");
}

const partSchema = new Schema({
  name: String,
  description: String,
  compatibilities: [String],
  imageUrl: [String],
});

const bicycleSchema = new Schema({
  name: String,
  installedParts: [String],
  imageUrl: [String],
});

const Part = Mongoose.model("Part", partSchema);
const Bicycle = Mongoose.model("Bicycle", bicycleSchema);

Part.deleteMany({});
Bicycle.deleteMany({});

Part.insertMany([
  {
    name: "Bicycle Part 1",
    description:
      "A seatpost wedge compatible with the 2019 S3 Rim and Disc models.",
    compatibilities: ["Bicycle B"],
    imageUrl: ["/assets/part-1-1.png", "/assets/part-1-2.png"],
  },
  {
    name: "Bicycle Part 2",
    description:
      'As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than "average") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that\'s sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach',
    compatibilities: ["Bicycle A"],
    imageUrl: ["/assets/part-2-1.png", "/assets/part-2-2.png"],
  },
]).then((data) => {
  console.log(data);
});

Bicycle.insertMany([
  {
    name: "Bicycle A",
    installedParts: [],
    imageUrl: [
      "/assets/bicycle-a-1.png",
      "/assets/bicycle-a-2.png",
      "/assets/bicycle-a-3.png",
    ],
  },
  {
    name: "Bicycle B",
    installedParts: [],
    imageUrl: [
      "/assets/bicycle-b-1.png",
      "/assets/bicycle-b-2.png",
      "/assets/bicycle-b-3.png",
    ],
  },
]).then((data) => {
  console.log(data);
});

// server.route({
//   method: "POST",
//   path: "/bicycle",
//   options: {
//     validate: {
//       payload: Joi.object({
//         name: Joi.string().required(),
//         installedParts: Joi.array().required(),
//         imageUrl: Joi.string().required(),
//       }),
//       failAction: (request, h, error) => {
//         return error.isJoi
//           ? h.response(error.details[0]).takeover()
//           : h.response(error).takeover();
//       },
//     },
//   },
//   handler: async (request, h) => {
//     try {
//       const bicycle = new Bicycle(request.payload);
//       const result = await bicycle.save();
//       return h.response(result);
//     } catch (error) {
//       return h.response(error).code(500);
//     }
//   },
// });

server.route({
  method: "GET",
  path: "/bicycle",
  handler: async (request, h) => {
    try {
      const bicycle = await Bicycle.find().exec();
      return h.response(bicycle);
    } catch (error) {
      return h.response(error).code(500);
    }
  },
});

server.route({
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
});

server.route({
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
});

server.route({
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
});

server.route({
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
});

server.start();
