const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// const Schema = mongoose.Schema;
//original code...redoing this to follow mongoose documentation
// let repoSchema = mongoose.Schema({
//   // TODO- your schema here!

// });

let repoSchema = mongoose.Schema({
  githubId: {type: Number, unique: true},
  login: String,
  owner_avatar_url: String,
  owner_url: String,
  repoName: String,
  createdAt: Date,
  updatedAt: Date,
  description: String,
  forks: Number,
  repoUrl: String
});

// TODO: Add a method to our model to return the twofive most recent reops from hack reactor
// repoSchema.methods.recentTwentyFive = () => {

// }

let Repo = mongoose.model('Repo', repoSchema);

let save = (apiResults) => {
  
  apiResults = JSON.parse(apiResults);

  apiResults.forEach((apiResult) => {
    let newEntry = new Repo({
      githubId: apiResult.id,
      login: apiResult.owner.login,
      ownerAvatarUrl: apiResult.owner.avatar_url,
      ownerUrl: apiResult.owner.url,
      repoName: apiResult.name,
      createdAt: apiResult.created_at,
      updatedAt: apiResult.updated_at,
      description: apiResult.description,
      forks: apiResult.forks,
      repoUrl: apiResult.html_url
    })
    newEntry.save((err, success) => {
      if (err) {
        console.error('there has been an error saving this data to the db')
      }
    })
  })

}

let find = (query, callback) => {
  let results = Repo.find({login: query.user})
  results.limit(25);
  results.exec((err, ourRepos) => {
    callback(ourRepos);
  })
}

exports.save = save;
exports.find = find;

// , (err, repo) => {
//   if (err) {
//     console.log('error querying the db');
//   } else {
//     console.log('success finding the data from mongo');
//     callback(repo);
//   }