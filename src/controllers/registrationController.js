import driverLicenseModel from "../models/driverLicenseModel.js";
import vehicleRegistrationModel from "../models/vehicleRegistrationModel.js";
import handleFileUpload from "../utils/handleFileUpload.js";

export const driverLicenseRegistration = async (req, res) => {

    try {
                    
        const  {
            full_name,
            state,
            lga,
            issue_date,
            expiry_date,
            date_of_birth,
            blood_group,
            vehicle_category

        } = req.body

        // console.log(req.files.driver_license_doc);
        const driver_license_doc = await handleFileUpload(req.files.driver_license_doc)

        await driverLicenseModel.create({
            user_id: req.user.id,
            full_name,
            state,
            lga,
            issue_date,
            expiry_date,
            date_of_birth,
            blood_group,
            vehicle_category,
            driver_license_doc
        })

        res.render('dashboard/driverLicenseReqistration', {
            message: 'Driver license details successfully uploaded'
        })

    } catch (error) {
        console.log(error);
    }
    
}

export const vehicleRegistration = async (req, res) => {

    const { full_name, engine_number, state, lga, age } = req.body

    const passport = await handleFileUpload(req.files.passport)

    const custom_papers =  await handleFileUpload(req.files.custom_papers)

    const identification = await handleFileUpload(req.files.identification)

    const insurance_papers = await handleFileUpload(req.files.insurance_papers)

    const proof_of_ownership =  await handleFileUpload(req.files.proof_of_ownership)

    const vehicle_image = await handleFileUpload(req.files.vehicle_image)

    await vehicleRegistrationModel.create({
        full_name,
        engine_number,
        state,
        lga,
        age,
        passport,
        custom_papers,
        identification,
        insurance_papers,
        proof_of_ownership,
        vehicle_image
    })

    res.render('dashboard/vehicleRegistration', {
        message: 'Vehicle registration details successfully uploaded'
    })
}