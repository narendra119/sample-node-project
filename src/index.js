const express = require("express")

app = express()

app.get("/", (req, res) => {
    return res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("App is Up and Serving on 3000")
})
