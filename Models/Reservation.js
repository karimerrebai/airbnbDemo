const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var reservationSchema = new mongoose.Schema({
    nights:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    checkIn:{
        type:Date,
        required:true,
    },
    checkOut:{
        type:Date,
        required:true,
    },
    //relation:
    customer:{
     type:mongoose.Types.ObjectId,
     ref:'Customer',
     required:true
    },
    facture:{
     type:mongoose.Types.ObjectId,
     ref:'Facture',
     required:false
    },
    loge:{
        type:mongoose.Types.ObjectId,
        ref:'Lodge',
        required:true
    }
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Reservation', reservationSchema);