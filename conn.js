import mongoose from "mongoose";

mongoose.connect('mongodb://8824rajat:jwbDuf7iXztxybKi@ac-arlrdez-shard-00-00.azc4onr.mongodb.net:27017,ac-arlrdez-shard-00-01.azc4onr.mongodb.net:27017,ac-arlrdez-shard-00-02.azc4onr.mongodb.net:27017/mydatabase?ssl=true&replicaSet=atlas-s27lkw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0');

const con = mongoose.connection;
con.on('open', () => {
    console.log("connection success");
})

const formSchema = new mongoose.Schema({
    hotelname: String,
    hotelphone: String,
    hotelemail: String,
    hotellocation: String,
    hotelrent: String,
    hotelimage:String
})

const Form = mongoose.model('Form',formSchema)
const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type:String,
        unique:true
    },
    password: String,
    phone:String,
})

const User = mongoose.model('User',userSchema)

export {Form,User}


