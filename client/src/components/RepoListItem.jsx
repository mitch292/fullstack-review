import React from 'react';

const RepoListItem = (props) => (
  <li>
    <h5>{props.name} by {props.user}</h5>
    <a href={props.link}>See this repo on GitHub!</a>
  </li>
)

export default RepoListItem