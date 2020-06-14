const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const personSchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:String,
    age:Number,
    articles:[{type:Schema.Types.ObjectId, ref:'Article'}]
})
const articleSchema = new Schema({
    
    author:{type:Schema.Types.ObjectId, ref:'Person'},
    title:String,
    fans:[{type:Schema.Types.ObjectId,ref:'Person'}]
})

const Person = mongoose.model('Person',personSchema)
const Article = mongoose.model('Article', articleSchema)
module.exports= {Person,Article}