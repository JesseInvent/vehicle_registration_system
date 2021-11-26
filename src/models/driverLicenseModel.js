import mongoose from 'mongoose'

const driverLicenseSchema = new mongoose.Schema({

    user_id: {
        type: String
    },

    full_name: {
        type: String
    },

    date_of_birth: {
        type: Date
    },

    state: {
        type: String
    },

    local_gov_area: {
        type: String
    },

    vehicle_category: {
        type: String
    },

    issue_date: {
        type: Date
    },

    driver_license_doc: {
        type: String
    },

    expiry_date: {
        type: Date
    }
},
{
    timestamps: true
})

const driverLicenseModel = mongoose.model('DriverLicense', driverLicenseSchema)

export default driverLicenseModel