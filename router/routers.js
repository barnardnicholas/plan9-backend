const twitterRouter = require("express").Router();
const { postTweet } = require("../controllers/controllers.js");

// Owner Endpoints
twitterRouter.post("/", postTweet);

module.exports = { twitterRouter };
