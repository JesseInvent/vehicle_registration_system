import mongoose from 'mongoose'

const vehicleRegistrationSchema = new mongoose.Schema({

    user_id: {
        type: String
    },
    
    full_name: {
        type: String
    },

    passport: {
        type: String
    },

    custom_papers: {
        type: String
    },

    identification: {
        type: String
    },

    insurance_papers: {
        type: String
    },

    proof_of_ownership: {
        type: String
    },

    vehicle_image: {
        type: String
    },

    engine_number: {
        type: String
    },

    state: {
        type: String
    },

    lga: {
        type: String
    },  

    age: {
        type: Number
    }
},
{
    timestamps: true
})

const vehicleRegistrationModel = mongoose.model('VehicleRegistration', vehicleRegistrationSchema)

export default vehicleRegistrationModel