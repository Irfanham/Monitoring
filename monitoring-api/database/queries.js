const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "1729",
  port: 5432,
});
// const getData = (req, res) => {
//   pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(results.rows);
//   });
// };

module.exports = { query: (text, params) => pool.query(text, params) };
