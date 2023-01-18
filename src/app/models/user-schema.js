import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    // username: {
    //     type: String,
    //     unique: true,
    // },
    email: {
        type: String,
        unique: true,
    }
})

userSchema.plugin(passportLocalMongoose)

const User_Schema = mongoose.model('User_Schema', userSchema)

export default User_Schema;