import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "First name is required"],
        minLength: [5, "Fname muste be 5 character long"],
        lowercase: true,
        trim: true,
        maxLength: [20, "Not more than 20 characters"]
    },

    lastName: {
        type: String, 
        required: [true, "First name is required"],
        minLength: [5, "Fname muste be 5 character long"],
        lowercase: true,
        trim: true,
        maxLength: [20, "Not more than 20 characters"]
    },

    mobileNumber:{
        type: Number,
        trim: true,
        unique:[true, "number is already in use"],
        required: true
    },

    email:{
        type:String,
        trim: true,
        required: [true, "Email should be provided"],
        unique: [true, "Already in use"],
        
    }
},
{
    timestamps:true
})

const User = mongoose.model("User", userSchema)

export default User


//Dur9EhlPznaO42Df