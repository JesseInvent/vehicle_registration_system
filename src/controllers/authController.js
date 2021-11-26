import bcrypt from "bcryptjs"
import userModel from "../models/userModel.js"
import createUserLoginSession from "../utils/createUserLoginSession.js"


export const createAccount = async (req, res) => {

    const { first_name, last_name, email, password } = req.body

    if(!first_name || !last_name || !email || !password) {
      return res.render('createAccount', {
            error: 'You missed a required field'
        })
    }

    const hashPassword = await bcrypt.hash(password, 12)

    const newUser = await userModel.create({ 
       first_name,
       last_name,
       email,
       password: hashPassword
    })

   createUserLoginSession(req, res, newUser)

   if(newUser) {
     console.log(res.session)
     return res.render('dashboard/dashboard')
   }

}
 

export const login = async (req, res) => {

    const { email, password } = req.body

    if(!email || !password) {
         return res.render('login', {
             error: 'Invalid login credentials'
         })
    }

    const user = await userModel.findOne({email})

    if(!user) {
        return res.render('login', {
            error: 'Invalid login credentials'
        })
    }


    if(!(await bcrypt.compare(password, user.password))) {
        return res.render('login', {
            error: 'Invalid login credentials'
        })
    }

    createUserLoginSession(req, res, user)

    return res.redirect('/dashboard')
}


export const logout = (req, res) => {

    req.session.destroy()
    res.locals = ''
    return res.redirect('/')
}