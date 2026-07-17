const express = require("express")
const path = require("path")
const setHeaders = require("./middlewares/headers")
const authRouter = require("./modules/auth/auth.router")
const app = express()

//bodyParser
app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(express.json({ limit: "50mb" }))

//cors Policy
app.use(setHeaders)


// Static Folders
app.use(express.static(path.join(__dirname, "..", "public")))


// Template Engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Routers
app.use("/login", (req, res) => { return res.render("Pages/Auth/Login/login") })
app.use("/recovery", (req, res) => { return res.render("Pages/Auth/Recovery/recovery") })
app.use("/bookmarks", (req, res) => { return res.render("Pages/Bookmarks/bookmarks") })
app.use("/postUpload", (req, res) => { return res.render("Pages/PostUpload/postUpload") })
app.use("/profile", (req, res) => { return res.render("Pages/Profiles/profile") })
app.use("/profileUpdate", (req, res) => { return res.render("Pages/ProfileUpdate/profileUpdate") })
app.use("/auth", authRouter)
app.use("/", (req, res) => { return res.render("index") })



//404 error
app.use((req, res) => {
    console.log(`This path was not found: ${req.path}`);
    res.status(404).json({ message: "404!! path not found!!" })
})


module.exports = app