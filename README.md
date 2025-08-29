# VIT Full Stack API

This is a REST API built with Express.js that processes arrays and returns specific information about the elements.

## API Endpoints

### POST /bfhl
Processes an array of elements and returns:
- Numbers (odd/even)
- Alphabets
- Special characters
- Sum of numbers
- Concatenated string of alphabets

### GET /bfhl
Returns operation code 1

## Request Format
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. API will be available at `http://localhost:3001`

## Technologies Used
- Node.js
- Express.js
- Body Parser
