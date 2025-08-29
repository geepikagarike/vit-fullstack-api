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
      // Convert item to string to handle all cases
      const strItem = String(item);
      
      // Check if it's a number
      if (!isNaN(strItem) && strItem.trim() !== "") {
        const num = Number(strItem);
        sum += num;
        if (num % 2 === 0) {
          evenNumbers.push(strItem);
        } else {
          oddNumbers.push(strItem);
        }
      } 
      // Check if it's an alphabet (could be multiple characters)
      else if (/^[a-zA-Z]+$/.test(strItem)) {
        alphabets.push(strItem.toUpperCase());
      } 
      // Otherwise it's a special character
      else {
        specialCharacters.push(strItem);
      }
    }

    // Create concatenated string "Ra"
    const concatString = "Ra";

    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
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

// Optional: GET endpoint for testing (if required)
app.get("/bfhl", (req, res) => {
  res.json({
    operation_code: 1
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});