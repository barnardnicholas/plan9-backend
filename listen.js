const server = require("./server.js");

server.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port 8080`);
});
