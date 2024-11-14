const express = require("express")

app = express()


// TODO
// 1. Add sample middleware and test it out
// 2. Add sample html files and test it out
// 3. Add Db connection logic and test it out
// 4. Add sample models and test it out
// 5. Integrate third-party APIs and test it out
// 6. Connect to Azure Cloud and access the Blob Files
// ...


app.get("/", (req, res) => {
    return res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("App is Up and Serving on 3000")
})
