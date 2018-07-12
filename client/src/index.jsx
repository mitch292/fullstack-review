import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import {testData} from '../../data.js';  
let host = process.env.HEROKU_URL || '127.0.0.1';
let port = process.env.PORT || 1128;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: testData
    }
    this.setState = this.setState.bind(this);

  }

  search (userToFind) {
    console.log(host)
    $.ajax({
      url:`http://${host}:${port}/repos`,
      type: 'POST',
      data: {user: userToFind},
      success: () => {
        $.get({
          url: `http://${host}:${port}/fromDb`,
          data: {
            user: userToFind
          },
          success: (foundData) => {
            console.log('the found data', foundData)
            this.setState({
              repos: foundData
            });
          },
          error: () => {
            console.error('there was an error fetching the user from the db')
          }
        }) 
        },
      error: (err) => {
        console.error('There was an error sending our to the server to fetch our search', err)
      }
    })
  };

  componentDidMount() {
    $.ajax({
      url:`http://${host}:${port}/repos`,
      type: 'POST',
      data: {user: 'reactjs'},
      success: () => {
        $.get({
          url: `http://${host}:${port}/fromDb`,
          data: {
            user: 'reactjs'
          },
          success: (foundData) => {
            console.log('the found data', foundData)
            this.setState({
              repos: foundData
            });
          },
          error: () => {
            console.error('there was an error fetching the user from the db')
          }
        }) 
        },
      error: (err) => {
        console.error('There was an error sending our to the server to fetch our search', err)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));