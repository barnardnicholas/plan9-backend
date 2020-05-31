const { sendTweet } = require("../models/models.js");

const postTweet = (request, response) => {
  console.log(`Reached controller`);
  const { status } = request.body;
  sendTweet((err, res) => {
    if (err) {
      console.log(err);
      response.status(500).send(err);
    } else {
      response.status(200).send(res);
    }
  }, status);
};

module.exports = {
  postTweet,
};
