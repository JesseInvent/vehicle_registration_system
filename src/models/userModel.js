import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    user_id: {
        type: String
    },

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

},
{
    timestamps: true
})

userSchema.methods.toJSON = function () {
    const userObject = this.toObject()
    delete userObject.password
    delete userObject.updatedAt
    delete userObject.__v

    return userObject
}


const userModel = mongoose.model('User', userSchema)

export default userModel