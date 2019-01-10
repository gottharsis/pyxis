import express from "express"
import hbs from "express-handlebars"
import session from "express-session"
import fs from "session-file-store"

const FileStore = fs(session)

const app = express()

// view engine setup
app.engine(
	"hbs",
	hbs({
		extname: ".hbs",
		defaultLayout: "main"
	})
)

app.set("view engine", "hbs")

// sessions
app.use(
	session({
		name: "pyxis",
		secret: "secret-stuff",
		saveUninitialized: true,
		resave: true,
		store: new FileStore()
	})
)

// public directories
app.use(express.static(__dirname + "/public"))

// default router
app.get("/", (req, res) => {
	res.render("home", { title: "Homepage" })
})

app.get("/process", (req, res) => {
	res.render("process", { title: "Process" })
})

app.get("/about", (req, res) => {
	res.render("about", { title: "About" })
})

app.listen(3000, () => console.log("Listening on port 3000"))
