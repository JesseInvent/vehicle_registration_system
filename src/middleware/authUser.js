
export default (req, res, next) => {

    if(!req.session.user) {
        return res.render('login', {
            error: 'Please login'
        })
    }

    req.user = req.session.user

    next()
    
}