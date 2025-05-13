const express = require('express');
const cors = require('cors');
// const fs = require('fs'); 
const faqs = require("./knowledgeBase.json")

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', (req, res) => {
    const userQuestion = req.body.question.toLowerCase();
    const found = faqs.find(faq =>
      userQuestion.includes(faq.question.toLowerCase().split(' ')[2]) // keyword match
    );
    res.json({ answer: found ? found.answer : "Sorry, I don't know that." });
  });
  
  app.listen(5000, () => console.log("API running on port 5000"));