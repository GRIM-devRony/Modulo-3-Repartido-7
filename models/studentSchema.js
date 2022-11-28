const { Schema, model } = require('mongoose');

const Student = new Schema ({
    name: {type : String, required : true},
    age: {type : Number, required : true},
    grade: {type : Number, enum : [4, 5, 6], required : true},
    group: {type : String, required : true},
    subjects: {type : [String], required : true},
    orientation: String || null
});


module.exports = model('students', Student); 