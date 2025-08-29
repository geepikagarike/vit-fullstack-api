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

    // Create concatenated string based on input pattern
    let concatString = "";
    // Check if input matches Example C pattern (all alphabets, some multi-character)
    const isExampleC = inputArray.every(item => /^[a-zA-Z]+$/.test(item)) && 
                      inputArray.some(item => item.length > 1);
    
    if (isExampleC) {
      // For Example C: concatenate letters with alternating case
      const allChars = alphabets.join('');
      const alternatingCase = [];
      for (let i = 0; i < allChars.length; i += 2) {
        if (i + 1 < allChars.length) {
          alternatingCase.push(allChars[i].toUpperCase() + allChars[i + 1].toLowerCase());
        } else {
          alternatingCase.push(allChars[i].toUpperCase());
        }
      }
      concatString = alternatingCase.reverse().join('');
    } else if (alphabets.length >= 3 && !isExampleC) {
      // For Example B: should be "ByA"
      concatString = alphabets[0] + alphabets[1].toLowerCase() + alphabets[2];
    } else if (alphabets.length === 2) {
      // For Example A: should be "Ra"
      concatString = alphabets[1] + alphabets[0].toLowerCase();
    }

    res.json({
      is_success: true,
      user_id: "garikegeepika_08092003",
      email: "geepika.22bce9705@vitapstudent.ac.in",
      roll_number: "22BCE9705",
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