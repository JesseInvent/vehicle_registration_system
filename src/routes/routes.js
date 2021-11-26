import { Router } from "express"
import { createAccount, login, logout } from "../controllers/authController.js"
import { driverLicenseRegistration, vehicleRegistration } from "../controllers/registrationController.js"
import authUser from "../middleware/authUser.js"
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

router.post('/test-upload', async (req, res) => {

   const result = await handleFileUpload(req.files.image)

   const url = result.url

})

// Dashboard routes PROTECTED

router.use(authUser)

router.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard')
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

router.get('/logout', logout)

// router.get('//dashboard', )
export default router