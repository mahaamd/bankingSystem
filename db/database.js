const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "54655465",
  database: "bank",
});

function connectToDatabase() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the database as ID: " + connection.threadId);
  });
}

module.exports = {
  connectToDatabase,
  connection,
};
