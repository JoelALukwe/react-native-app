const sql = require('mssql');

// Function to add a new medication order to the database
async function addOrder(medicationName, quantity) {
    try {
        await sql.connect('your_database_config'); // only replace 'your_database_config' with  actual database configuration
        const result = await sql.query(`INSERT INTO Orders (medicationName, quantity) VALUES ('${medicationName}', ${quantity})`);
        return result;
    } catch (error) {
        throw new Error(`Error adding order: ${error.message}`);
    } finally {
        sql.close();
    }
}

module.exports = { addOrder };
