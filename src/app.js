const express = require("express")
const path = require("path")
const app = express()

// Static Folders
app.use(express.static(path.join(__dirname, "..", "public")))


// Template Engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Routers
app.use("/login", (req, res) => { return res.render("Pages/Auth/Login/login") })
app.use("/recovery", (req, res) => { return res.render("Pages/Auth/Recovery/recovery") })
app.use("/register", (req, res) => { return res.render("Pages/Auth/Register/register") })
app.use("/bookmarks", (req, res) => { return res.render("Pages/Bookmarks/bookmarks") })
app.use("/postUpload", (req, res) => { return res.render("Pages/PostUpload/postUpload") })
app.use("/profile", (req, res) => { return res.render("Pages/Profiles/profile") })
app.use("/profileUpdate", (req, res) => { return res.render("Pages/ProfileUpdate/profileUpdate") })
app.use("/", (req, res) => { return res.render("index") })




module.exports = app