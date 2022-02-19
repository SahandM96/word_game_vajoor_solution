const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let usersSchema = new Schema({
    email:{
        type:String,
        uniq:true,
        require:true
    },
    password:{
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
usersSchema.pre('save',(next)=>{
    let user=this;
    user.role={'name':'user','authorities':['read','update']}
    next();
})
let user = mongoose.model('user',usersSchema);
