import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Lobby from './Lobby'
import Profile from './Profile'
import Story from './Story'
// import NavButton from './NavButton' <-- doubt we need to import this here
import CreateStory from './CreateStory'
import NavBar from './NavBar'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: false
    }
    // Bind this to logout so it can be passed down through multiple components
    // this.logout = this.logout.bind(this)
    // ^ I don't think we need this any longer, as logout is just a route which
    //   kills the session
  }

  componentDidMount () {
    //Make and initial get request to sign the user in with Facebook
    //This current user will be used in many places throughout the app.
    $.get('/user')
    .then(user => {
      this.setState({
        currentUser: user
      })
    })
    .catch(err => {
      console.log('App.js - No user is signed in: ', err)
    })
  }

  logout () {
    this.setState({
      currentUser: false
    })
  }

  render () {
    return (
      <div>
        <NavBar
          currentUser={this.state.currentUser}
        />
        {
        //if there is a current user, render the lobby/story with react router
        //else tell the user to login
        this.state.currentUser ?
        <Router history={hashHistory}>
          <Route path='/' component={Lobby} />
          <Route path='/stories/:id' component={Story} user={this.state.currentUser} />
          <Route path='/user/:id' component={Profile} test={'hey'} />
        </Router>
        :
        <div> </div>
        }
      </div>
    )
  }
}

export default App
