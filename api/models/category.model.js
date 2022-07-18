const mongoose = require("mongose");

const category = mongoose.model(
    "Category",
    mongoose.schema({
        categoryName: {
            type: "string",
            required: true,
            unique: true,
        },
        categoryDescription: {
            type: String,
            required: false,
        },
        categoryImage: {
            type: String,
        },
    })
);
module.export = {
    category,
};
