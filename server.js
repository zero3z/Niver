const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`RPC đã hoạt động`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Sever sẵn sàng!! " + Date.now()) });
}
 
module.exports = keepAlive;
