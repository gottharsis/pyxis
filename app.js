import express from "express"
import hbs from "express-handlebars"
import session from "express-session"
import bodyParser from "body-parser"
import morgan from "morgan"
import _ from "lodash"
// import fs from "session-file-store"
import knex from "./db/database"

import productRouter from "./routes/products"
import merchRouter from "./routes/merch"
import cartAPIRouter from "./routes/cart-api"
import cartRouter from "./routes/cart"

const app = express()

// view engine setup
app.engine(
	"hbs",
	hbs({
		extname: ".hbs",
		defaultLayout: "main",
		helpers: {
			productLink: id => `/view-product/${id}`,
			addToCartLink: id => `/cart-api/add/${id}/1`,
			currencyFormat: num => {
				return (
					"$" +
					_.parseInt(num)
						.toFixed(2)
						.replace(/\d(?=(\d{3})+\.)/g, "$&,")
				)
			}
		}
	})
)

app.set("view engine", "hbs")

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan("dev"))

// sessions
const KnexSessionStore = require("connect-session-knex")(session)
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
app.use("/cart-api", cartAPIRouter)
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

app.get("/pricing", (req, res) => {
	res.render("pricing", { title: "Pricing" })
})

// test the sessions
app.get("/session", (req, res) => {
	let n
	if (req.session.hasOwnProperty("n")) {
		n = req.session.n + 1
	} else {
		n = 0
	}
	req.session.n = n
	res.json({ n })
})

export default app
