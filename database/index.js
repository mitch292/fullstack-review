const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;
//original code...redoing this to follow mongoose documentation
// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!

// });

const repoSchema = new Schema({
  githubId: Number,
  name: String,
  fullName: String,
  owner: {
    login: String,
    id: Number,
    avatarUrl: String,
    url: String
  },
  url: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
  pushedAt: Date,
  forksCount: Number,
  forks: Number,
  openIssuesCount: Number,
  openIssues: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;