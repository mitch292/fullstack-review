const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;
//original code...redoing this to follow mongoose documentation
// let repoSchema = mongoose.Schema({
//   // TODO- your schema here!

// });

const repoSchema = new Schema({
  githubId: Number,
  login: String,
  avatar_url: String,
  url: String,
  name: String,
  createdAt: Date,
  updatedAt: Date,
});

// TODO: Add a method to our model to return the twofive most recent reops from hack reactor
// repoSchema.methods.recentTwentyFive = () => {

// }

let Repo = mongoose.model('Repo', repoSchema);

let save = (apiResults) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newEntry = new Repo({
    githubId: apiResults.id,
    login: apiResults.login,
    avatarUrl: apiResults.avatar_url,
    url: apiResults.url,
    name: apiResults.name,
    createdAt: apiResults.created_at,
    updatedAt: apiResults.updated_at,
  })
  newEntry.save((err, success) => {
    if (err) {
      console.error('there has been an error saving this data to the db', err)
    } else {
      console.log('sucessss!!!!', success)
    }
  })
}

module.exports.save = save;