const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'root',           
    password: '',           
    database: 'test_db'     
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Query Error:', err);
        } else {
            console.log('Users Table Data:', results);
        }
        connection.end();
    });
});