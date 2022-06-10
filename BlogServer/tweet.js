const mongoose = require("mongoose") ; 

const TweetSchema = new mongoose.Schema({
    id : {
        type : Number , 
        required : true
    } ,  
    date : {
        type : String , 
        required : true
    } ,   
    tweet : {
        type : String , 
        required : true 
    }

}
)

const tweet = mongoose.model("tweet" , TweetSchema) ;

module.exports = tweet ;