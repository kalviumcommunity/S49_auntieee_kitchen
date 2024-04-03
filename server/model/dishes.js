const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  created_by:{
    type:String,
    required:true
  }
});

const DishesModel = mongoose.model("dishes", dishesSchema);

module.exports = DishesModel;