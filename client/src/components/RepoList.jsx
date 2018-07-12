import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => {
  const ourRepos = props.repos.map((repo, i) => 
    <RepoListItem key={i} name={repo.repoName} user={repo.login} description={repo.description} repoUrl={repo.repoUrl} />
  )
  return (
  <div>
    <h4>There are {props.repos.length} repos.</h4>
    <ul>
      {ourRepos}
    </ul>
  </div>
)
}

export default RepoList;