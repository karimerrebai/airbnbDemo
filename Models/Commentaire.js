const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    //relation
    customer:{
        type:mongoose.Types.ObjectId,
        ref:'Commentaire',
        required:true
    },
    loge:{
        type:mongoose.Types.ObjectId,
        ref:'Loge',
        required:true
    }
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Commentaire', commentSchema);