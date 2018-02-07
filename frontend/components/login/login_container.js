import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
