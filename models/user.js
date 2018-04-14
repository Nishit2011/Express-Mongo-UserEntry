var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nodetest')

var db = mongoose.connection;

//User Schema
var userSchema = mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	sex:{
		type:String
	},
	age:{
		type:Number
	},
	country:{
		type:String
	}
})


var User = module.exports = mongoose.model('User',userSchema);

module.exports.createUser = function(newUser,callback){
	newUser.save(callback);
}