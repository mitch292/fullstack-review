const request = require('request');
const config = require('../config.js');

let getReposByUsername = ({user}, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, response, body) => {
    if (err) {
      console.log('there was an error with getting the repos from github')
    } else {
      // console.log('the response', response);
      callback(body);
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;