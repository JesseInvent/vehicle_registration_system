import express from "express"
import session from "express-session"
import mongoSantizer from "express-mongo-sanitize"
import path from "path"
import expressLayouts from "express-ejs-layouts"
import routes from "./routes/routes.js"

const app = express()

// ejs settings
app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(expressLayouts)
app.set('layout', 'layouts/layout.ejs')

// Body parser
app.use(express.urlencoded({ extended: false }))

// Static files
app.use(express.static(path.resolve('public')))

// Session setting
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {}
}))

// Routes
app.use(routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening http://localhost:${PORT}`))