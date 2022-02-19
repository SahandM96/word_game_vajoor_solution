const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let wordsSchema = new Schema({
    word:{
        type:String,
        uniq:true,
        require:true
    },
    length:{
        type:String,
        require:true
    },
    createDate:{
        type:Date.now(),
        require:true
    },
    lastUpdate:{
        type:Date.now(),
        require:true
    },
    role:{
        name:{
            type:String,
            require:true
        },
        authorities:{
            type:Array,
            require:true
        }
    }
})
wordsSchema.pre('save',(next)=>{
    console.log("new word saved!")
    next();
})
let words = mongoose.model('words',wordsSchema);
