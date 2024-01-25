const { connection } = require("../db/database");
const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) => {
  connection.query("SELECT * FROM User", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

exports.get = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM User Where id = ${id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
});
