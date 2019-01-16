import express from "express"
import hbs from "express-handlebars"
import session from "express-session"
import bodyParser from "body-parser"
import morgan from "morgan"
// import fs from "session-file-store"
import SessionStore from "connect-session-knex"
import knex from "./db/database"

import productRouter from "./routes/products"
import merchRouter from "./routes/merch"
import cartRouter from "./routes/cart"

const app = express()

// view engine setup
app.engine(
	"hbs",
	hbs({
		extname: ".hbs",
		defaultLayout: "main",
		helpers: {
			"product-link": id => `/view-product/${id}`
		}
	})
)

app.set("view engine", "hbs")

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan("dev"))

// sessions
const KnexSessionStore = SessionStore(session)
const store = new KnexSessionStore({
	knex
})

app.use(
	session({
		name: "pyxis",
		secret: "secret-stuff",
		saveUninitialized: true,
		resave: true,
		cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }, // 1 day
		store
	})
)

// public directories
app.use(express.static(__dirname + "/public"))

// routers

app.use("/products", productRouter)
app.use("/", merchRouter)
app.use("/cart", cartRouter)

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



export default app
