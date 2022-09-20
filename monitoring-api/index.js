const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./database/queries");

dotenv.config();
app.use(cors());

app.get("/", async (req, res, next) => {
  const { rows } = await db.query(
    "SELECT * from devices where created_at = (SELECT max(created_at) FROM devices)"
  );
  if (rows) {
    return res.status(200).send(rows);
  }
  return res.status(500).send(err);
});

//post
const setData = async (callback) => {
  function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const debit = between(0, 200);
  const tss = between(0, 200);
  const ph = between(0, 200);
  const no3n = between(0, 200);
  const po4 = between(0, 200);
  const nh3n = between(0, 200);
  const tds = between(0, 200);
  const bod5 = between(0, 200);
  const cod = between(0, 200);
  const fe = between(0, 200);
  const cu = between(0, 200);
  const cr = between(0, 200);

  const { rows } = await db.query(
    `INSERT INTO devices(debit,tss,ph,no3n,po4,nh3n,tds,bod5,cod,fe,cu,cr) VALUES
     (${debit},${tss},${ph},${no3n},${po4},${nh3n},${tds},${bod5},${cod},${fe},${cu},${cr}); `
  );

  if (!rows) {
    return callback(err);
  }
  return callback(undefined);
  //callback();
};
function wait() {
  setTimeout(function () {
    setData(wait);
  }, 10000);
}
setData(wait);
app.post("/", async (req, res, next) => {
  setData((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
  });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server Running at Localhost:${port}`));
