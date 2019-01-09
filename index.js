import express from "express"
import hbs from "express-handlebars"

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
