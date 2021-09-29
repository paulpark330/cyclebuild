const Mongoose = require("mongoose");
const { Schema } = Mongoose;

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

Bicycle.insertMany([
  {
    name: "Bicycle A",
    installedParts: [],
    imageUrl: [
      "src/assets/bicycle-a-1.png",
      "src/assets/bicycle-a-2.png",
      "src/assets/bicycle-a-3.png",
    ],
  },
  {
    name: "Bicycle B",
    installedParts: [],
    imageUrl: [
      "src/assets/bicycle-b-1.png",
      "src/assets/bicycle-b-2.png",
      "src/assets/bicycle-b-3.png",
    ],
  },
]).then((data) => {
  console.log(data);
});

Part.insertMany([
  {
    name: "Bicycle Part 1",
    description:
      "A seatpost wedge compatible with the 2019 S3 Rim and Disc models.",
    compatibilities: ["Bicycle B"],
    imageUrl: ["src/assets/part-1-1.png", "src/assets/part-1-2.png"],
  },
  {
    name: "Bicycle Part 2",
    description:
      'As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than "average") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that\'s sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach',
    compatibilities: ["Bicycle A"],
    imageUrl: ["src/assets/part-2-1.png", "src/assets/part-2-2.png"],
  },
]).then((data) => {
  console.log(data);
});
