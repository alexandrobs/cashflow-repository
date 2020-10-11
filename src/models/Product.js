const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    },
    salesDate:{
        type: Date,
        require: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);