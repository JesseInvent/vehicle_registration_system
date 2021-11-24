import { Router } from "express"

const router = Router()

router.get('/',  (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/create_account', (req, res) => {
    res.render('createAccount')
})

// Dashboard routes PROTECTED
router.get('/dashboard', (req, res) => {
    res.render('dashboard/dashboard')
})

router.get('/dashboard/vehicle_reg', (req, res) => {
    res.render('dashboard/vehicleRegistration')
})

router.get('/dashboard/driver_reg', (req, res) => {
    res.render('dashboard/driverLicenseReqistration')
})


router.get('//dashboard', )
export default router