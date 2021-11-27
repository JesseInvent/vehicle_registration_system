import { Router } from "express"
import { createAccount, login, logout } from "../controllers/authController.js"
import { driverLicenseRegistration, vehicleRegistration } from "../controllers/registrationController.js"
import authUser from "../middleware/authUser.js"
import driverLicenseModel from "../models/driverLicenseModel.js"
import vehicleRegistrationModel from "../models/vehicleRegistrationModel.js"
import handleFileUpload from "../utils/handleFileUpload.js"


const router = Router()

router.get('/',  (req, res) => {
    res.render('index')
})

router.route('/login')
    .get((req, res) => {
        res.render('login')
    })
    .post(login)


router.route('/create_account')
    .get((req, res) => {
        res.render('createAccount')
    })
    .post(createAccount)


// Test
router.get('/test', (req, res) => {
    return res.render('test')
})

// router.post('/test-upload', async (req, res) => {

//    const result = await handleFileUpload(req.files.image)

//     //    const url = result.url

// })

// Dashboard routes PROTECTED

router.use(authUser)

router.get('/dashboard', async(req, res) => {

    const user_id = req.user.id

    const driverLicense = await driverLicenseModel.findOne({
        user_id
    })

    const vehicleRegistration = await vehicleRegistrationModel.findOne({
        user_id
    })

    // console.log(driverLicense, vehicleRegistration);

    res.render('dashboard/dashboard', {
        driverInfo: driverLicense,
        vehicleInfo: vehicleRegistration
    })
})

router.route('/dashboard/vehicle_reg')
    .get((req, res) => {
        res.render('dashboard/vehicleRegistration')
    })  
    .post(vehicleRegistration)


router.route('/dashboard/driver_reg')
    .get((req, res) => {
        res.render('dashboard/driverLicenseReqistration')
    })
    .post(driverLicenseRegistration)


router.get('/delete/vehicle/:id', async (req, res) => {

    const id = req.params.id

    await vehicleRegistrationModel.findByIdAndDelete(id)

    res.redirect('/dashboard')

})

router.get('/delete/driver/:id', async (req, res) => {

    const id = req.params.id

    await driverLicenseModel.findByIdAndDelete(id)

    res.redirect('/dashboard')

})

router.get('/logout', logout)

// router.get('//dashboard', )
export default router