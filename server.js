const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// POST API for /bfhl
app.post("/bfhl", (req, res) => {
  try {
    const inputArray = req.body.data;
    const user_id = "garikegeepika_08092003";
    const email = "geepika.22bce9705@vitapstudent.ac.in";
    const roll_number = "22BCE9705";

    if (!inputArray || !Array.isArray(inputArray)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input. Expected an array in 'data' field."
      });
    }

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;

    for (let item of inputArray) {
      const strItem = String(item);
      
      if (!isNaN(strItem) && strItem.trim() !== "") {
        const num = Number(strItem);
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(strItem);
        } else {
          oddNumbers.push(strItem);
        }
      } 
      else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem);
      } 
      else {
        specialCharacters.push(strItem);
      }
    }

    // Generate concat_string by processing all alphabetic characters
    const allChars = alphabets.join('').split('');
    let concatString = '';

    for (let i = allChars.length - 1; i >= 0; i--) {
      const char = allChars[i];
      const positionFromEnd = allChars.length - 1 - i;
      
      if (positionFromEnd % 2 === 0) {
        concatString += char.toUpperCase();
      } else {
        concatString += char.toLowerCase();
      }
    }

    res.json({
      is_success: true,
      user_id: "garikegeepika_08092003",
      email: "geepika.22bce9705@vitapstudent.ac.in",
      roll_number: "22BCE9705",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets.map(a => a.toUpperCase()),
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: concatString
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

// GET endpoint for testing
app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});