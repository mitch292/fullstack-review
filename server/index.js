const express = require('express');
const db = require('../database/index.js');
let app = express();
const github = require('../helpers/github.js').getReposByUsername;
const bodyParse = require('body-parser');
const cors = require('cors');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());
app.use(cors());
// let ourResults = app.use((req, res) => {
//   return github(req.query)
// })

// console.log('our results in outer scope', ourResults)

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github(req.body, (body) => {
    db.save(body);
  });
})

app.get('/repos',function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // github(req.query).then((gitHubResults) => {
  //   res.json(gitHubResults);
  // })
  // console.log('the results we will return to the client', ourResults);
  // res.send(ourResults)
});

let port = 1128;


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

