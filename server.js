const express=require('express')
require('dotenv').config()
const app=express()

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json(`Server is live and ${process.env.Key} is available`);
});


app.listen(process.env.PORT, () =>
  console.log(`SERVER UP and running at ${process.env.PORT}`)
);
