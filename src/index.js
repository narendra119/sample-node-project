const express = require("express")
const path = require("path")
require("dotenv").config();

env = process.env
PORT = env.PORT || 3000


app = express()

app.use(express.static(path.join(__dirname, "static")))

// TODO
// 0. Setup env var reading
// 1. Add sample middleware and test it out - DONE
// 2. Add sample html files and test it out - WIP
// 3. Add Db connection logic and test it out
// 4. Add sample models and test it out
// 5. Integrate third-party APIs and test it out
// 6. Connect to Azure Cloud and access the Blob Files
// ...


// Sample middleware
app.use((req, res, next) => {
    // Both request and response objects can be manipulated in middleware
    console.log(Object.keys(req))

    console.log("Hello! From Middleware.")
    // next() is to be called mandatorily.
    // Otherwise, the control stays in middleware forever
    next()

})

app.get("/serve-html", (req, res) => {
    console.log(__dirname)
    return res.sendFile(__dirname + "/static/index.html")
})


app.get("/middleware", (req, res) => {
    console.log(res)
    return res.send("Hello World!")
})


app.get("/", (req, res) => {
    return res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log("App is Up and Serving on 3000")
})
