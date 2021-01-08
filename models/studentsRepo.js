const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    student_id : String,
    student_name : String,
    school : String,
    admit_date : {
        type : Date,
        default : Date.now
    }
});

//it will crete schema into a database
module.exports = mongoose.model('Students',StudentSchema)