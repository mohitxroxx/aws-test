const express=require('express')
require('dotenv').config()
const app=express()

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Server up and running bc</h1>");
});


app.listen(process.env.PORT, () =>
  console.log(`SERVER UP and running at ${process.env.PORT}`)
);
