import React from 'react';

const RepoListItem = (props) => (
  <li>
    <h5>{props.name} by {props.user}</h5>
    <p>{props.description}</p>
    <a href={props.repoUrl}>Find this repo on github</a>
  </li>
)

export default RepoListItem