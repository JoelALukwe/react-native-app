const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();
const express = require('express');
const errorHandler = require('./errorHandlingMiddleware');



// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to receive medication orders
app.post(
  '/place-order',
  [
    // Input validation middleware using express-validator
    check('medicationName').not().isEmpty().withMessage('Medication name is required'),
    check('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passes, save the order details to the legacy database
    const orderDetails = req.body;
    // Logic to save order details to the legacy database
    console.log('Received Order:', orderDetails);
    res.json({ message: 'Order placed successfully!' });
  }
);

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// this morgan logging library will be used to log server activities and errors.
const morgan = require('morgan');
app.use(morgan('combined'));



// Import routes
const routes = require('./routes');

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Error Handling Middleware
app.use(errorHandler);
