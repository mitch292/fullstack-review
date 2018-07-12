import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => {
  const ourRepos = props.repos.map((repo) => 
    <RepoListItem key={repo.id} name={repo.name} user={repo.owner.login} link={repo.url} />
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