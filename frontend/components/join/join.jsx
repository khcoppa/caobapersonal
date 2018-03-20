import React, { Component } from 'react';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 renderErrors() {
    if (this.props.errors.responseJSON) {
      return (<p>{this.props.errors.responseJSON}</p>);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user})
  }

  render() {
    return(
      <div className="form-container">

        <h2>Join CAOBA Personal</h2>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>

          <div className="username-input">
            <input
              type="text"
              placeholder="Enter Email"
              value={this.state.username}
              onChange={this.update('username')}/>

          </div><br />

          <div className="password-input">
            <input className="form-input"
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="password-input"/>
          </div><br />

          <button id="submit-button">Join</button>

        </form>

      </div>
    );
  }
}

module.exports = Join;
