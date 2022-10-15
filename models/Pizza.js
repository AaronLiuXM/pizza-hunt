const { schema, model, Schema } = require("mongoose");

const PizzaSchema = new Schema({
  pizzaName: {
    type: string,
  },
  createBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: string,
    default: "Large",
  },
  toppings: [],
});

// create the Pizza using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
