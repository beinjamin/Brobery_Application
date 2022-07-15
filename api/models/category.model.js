const mongoose = require('mongose');

const category = mongoose.model(
    "Category",
    mongoose.schema(
        {
            categoryName: {
                    type: "string",
                    require: true,
                    unique:true,

            },

        })



);