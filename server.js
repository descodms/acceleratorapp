require('app-module-path').addPath(__dirname);
const express = require('express');
const baseRouter = require('./src/routers/BaseRouter')
const app = express()
const cors = require('cors')

app.use(cors())
app.use('/api', baseRouter)

app.listen(3010, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", 3010);
});
