const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://pavanrayabagi1:uCrk047y1iAFHYSr@cluster.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Colorful Express App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #000000;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .container {
          text-align: center;
        }

        h1 {
          color: #3498db;
        }

        p {
          color: #e74c3c;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, MongoDB!</h1>
        <p>Great, we have done it Using ansible!</p>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
