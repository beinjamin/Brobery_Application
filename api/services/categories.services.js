const { MONGO_DB_CONFIG } = require("../config/app.config");
const { category } = require("../models/category.model");

async function createCategory(params, callback) {
    if (!params.categoryName) {
        return callback(
            {
                message: "Category Name Required",
            },
            ""
        );
    }
    const model = new category(params);
    model
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

async function getCategory(params, callback) {
    const categoryName = params.categoryName;
    var condiction = categoryName?{
        categoryName: {$regex: new RegExp(categoryName),$options:"i"}}
        :{};
        let perPage = Math.abs(params.pageSize) || MONGO_DB_CONFIG.pageSize
    
}