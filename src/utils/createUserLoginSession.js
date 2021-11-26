
export default (req, res,  user) => {

    req.session.user = user
    req.session.isLogin = true
    res.locals.isLogin = req.session.isLogin
    res.locals.user = user

}