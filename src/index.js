import express from "express"
import dotenv from "dotenv"

import session from "express-session"
import mongoSantizer from "express-mongo-sanitize"
import fileUploader from "express-fileupload"
import path from "path"
import expressLayouts from "express-ejs-layouts"
import routes from "./routes/routes.js"
import { connectDB } from "./utils/database.js"

const app = express()

dotenv.config()

connectDB()

// ejs settings
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(expressLayouts)
app.set('layout', 'layouts/layout.ejs')


// Static files
app.use(express.static(path.resolve('public')))

// File uploader
app.use(fileUploader({
    createParentPath: true
}))


// Body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(mongoSantizer())

// Session setting
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 10
    }
}))

app.use(function(req, res, next) {
    res.locals = { ...req.session }
    next();
});

// Routes
app.use(routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening http://localhost:${PORT}`))