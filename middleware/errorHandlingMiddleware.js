const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    
    // Set response status code and send error message
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;