const express = require('express');
const db = require('../database/index.js');
let app = express();
const github = require('../helpers/github.js').getReposByUsername;
const bodyParse = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 1128;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());
app.use(cors());


app.post('/repos',(req, res) => {
  github(req.body, (body) => {
    db.save(body)
  });
  res.send();
});

app.get('/repos',function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // github(req.query).then((gitHubResults) => {
  //   res.json(gitHubResults);
  // })
  // console.log('the results we will return to the client', ourResults);
  // res.send(ourResults)
});

app.get('/fromDb', (req, res)=> {
  db.find(req.query, (theRepos) => {

    res.send(theRepos)
  })
})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

exports.port = port;