const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.send("API Running"));

app.post("/quiz", (req,res)=>{
  res.json({
    question: "What is 2+2?",
    options: ["3","4","5"],
    answer: "4"
  });
});

app.post("/chat", (req,res)=>{
  res.json({
    reply: "AI working 🚀"
  });
});

app.listen(10000, ()=>console.log("Server running"));
