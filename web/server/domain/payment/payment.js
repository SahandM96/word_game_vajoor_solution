const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let paymentSchema = new Schema({
    amount:{
        type:Number,
        require:true
    },
    fromName:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    createDate:{
        type:Date.now(),
        require:true
    },
})
paymentSchema.pre('save',(next)=>{
    console.log("new payment saved!")
    next();
})
let payment = mongoose.model('payment',paymentSchema);
