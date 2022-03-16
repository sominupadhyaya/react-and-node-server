const express = require("express")
const cors = require("cors")

const app = express()
const port = 8000

app.use(cors({ origin: "http://localhost:3000" }))

app.get("/", (req, res) => {
  res.send([
    { name: "Somin", age: 15, class: 11, school : 'GSS' },
    { name: "Subhani", age: 19, class: 13, school : 'KU' },
    { name:   "Apil", age: 13, class: 7, school : 'Liverpool' }
  ])
})


app.listen(port, () => {
  console.log(`example app running at http://localhost:${port}`)
})
