const express = require("express");
const request = require("request");
const app = express();

const port = 8000;

app.use(express.static("public"));

app.get("/exercises", (req, res) => {
  const { bodypart } = req.query;

  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
    headers: {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "56fbe735ffmsh9965c7999381eeep11113fjsn6e0953b0e14b",
      useQueryString: true,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.json(JSON.parse(body));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
